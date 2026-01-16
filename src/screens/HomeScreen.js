import React, { useEffect, useState } from 'react';
import PostCard from '../components/PostCard';
import { fetchPosts } from '../services/api';
import { saveSearch, getSearch } from '../utils/storage';

export default function HomeScreen() {
  const [posts, setPosts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    loadPosts();
    loadSavedSearch();
  }, []);

  const loadPosts = async () => {
    try {
      const data = await fetchPosts();
      setPosts(data);
      setFiltered(data);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const loadSavedSearch = () => {
    const saved = getSearch();
    if (saved) {
      setSearch(saved);
      filterPosts(saved);
    }
  };

  const filterPosts = (text) => {
    const result = posts.filter(p =>
      p.title.toLowerCase().includes(text.toLowerCase())
    );
    setFiltered(result);
  };

  const handleSearch = () => {
    saveSearch(search);
    filterPosts(search);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Unable to fetch posts. Check your network connection.</p>;

  return (
    <div style={{ padding: 10 }}>
    
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}>
        <input
          type="text"
          placeholder="Search by title"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
          style={{
            border: '1px solid #ccc',
            backgroundColor: '#cdd7d3',
            padding: 8,
            width: 300,
            borderRadius: 6
          }}
        />
      </div>

      {filtered.length === 0 ? (
        <p style={{ textAlign: 'center' }}>No posts found.</p>
      ) : (
        filtered.map(item => (
          <PostCard
            key={item.id}
            title={item.title}
            body={item.body}
          />
        ))
      )}
    </div>
  );
}
