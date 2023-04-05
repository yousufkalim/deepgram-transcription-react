// Init
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import api from '../api';
import { UpdateStore } from '../StoreContext';

// Component
export default function Form() {
  const [type, setType] = useState('text');
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  const updateStore = UpdateStore();

  const handleChange = (e) => {
    if (e.target.name === 'text') {
      setData({ audio_url: e.target.value });
    } else {
      setData({ audio: e.target.files[0] });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (type === 'text' && !data.audio_url) {
      return toast.error('URL is not provided');
    }

    if (type === 'file' && !data.audio) {
      return toast.error('File is not provided');
    }

    const formData = new FormData();
    if (type === 'text') {
      formData.append('audio_url', data.audio_url);
    } else {
      formData.append('audio', data.audio);
    }

    try {
      const { data: res } = await api('post', '/transcriptions/transcribe', formData);

      updateStore({ summary: res.summaries[0]?.summary, transcript: res.transcript.transcript });
      return setLoading(false);
    } catch (err) {
      return setLoading(false);
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="type-selector">Select type: </label>
          <select
            name="type"
            id="type-selector"
            onChange={(e) => {
              setType(e.target.value);
            }}
          >
            <option value="text">Text</option>
            <option value="file">Audio File</option>
          </select>
        </div>
        <div>
          {type === 'text' ? (
            <>
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label htmlFor="text-input">Audio URL: </label>
              <input
                id="text-input"
                type={type}
                placeholder="Enter audio url"
                name="text"
                required
                onChange={handleChange}
              />
            </>
          ) : (
            <>
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label htmlFor="file-input">Audio File: </label>
              <input id="file-input" type={type} name="file" required onChange={handleChange} />
            </>
          )}
        </div>
        <button type="submit" disabled={loading}>
          {loading ? <i className="fa fa-refresh fa-spin" /> : 'Transcribe'}
        </button>
      </form>
    </div>
  );
}
