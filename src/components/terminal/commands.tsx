import axios from "axios";
import { useEffect, useState } from "react";

export function WelcomeMessage() {
  return (
    <div>
      <p>
        Welcome to my portfolio! Type <code>help</code> to see a list of
        commands.
      </p>
      <br />
    </div>
  );
}

export function Help() {
  return (
    <div>
      <p>
        <code>whoami</code> - display information about the author
      </p>
      <p>
        <code>blog</code> - read blog posts
      </p>
    </div>
  );
}

async function fetchArticles() {
  const response = await axios.get(
    "https://dev.to/api/articles?username=andersonzero0"
  );

  console.log(response.data);
  return response.data;
}

interface Article {
  title: string;
  description: string;
  url: string;
}

export function Blog() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchArticles().then((data) => {
      setArticles(data);
      setLoading(false);
    });
  }, []);

  return (
    <div>
      {!articles || articles.length == 0
        ? (loading && <p>Loading articles...</p>) || <p>No articles found</p>
        : articles.map((article) => (
            <div>
              <strong>- {article.title}</strong>
              <p>
                {article.description.length < 80
                  ? article.description
                  : article.description.substring(0, 80) + "..."}
              </p>
              <a href={article.url} target="_blank" rel="noreferrer">
                Read more
              </a>
              <br />
              <br />
            </div>
          ))}
    </div>
  );
}
