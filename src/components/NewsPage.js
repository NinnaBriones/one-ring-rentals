import React, { useEffect } from 'react';
import ArticleGrid from './ArticleGrid'; 
import { newsArticles } from '../data/homepageData'; 

export default function NewsPage() {
  
  useEffect(() => {
    document.title = "One Ring Rentals - News";
  }, []);

  return (
    <div className="content">
      <div className="container">
        <div className="row">
          <div className="main col-sm-12">
            <ArticleGrid 
              articles={newsArticles} 
              title="Latest News"  
              showButton={false} 
            />
          </div>
        </div>
      </div>
    </div>
  );
}