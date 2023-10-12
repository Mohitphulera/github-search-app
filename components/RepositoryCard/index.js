import React from 'react';

function RepositoryCard({ repo }) {
    return (
        <div className="repo-card">
            <div className="user-info">
            <h1>{repo.name}</h1>
            <p><b>Owner :</b> {repo?.owner?.login}</p>
            </div>
            <div className="repo-info">
                <p><b>Stars :</b> {repo?.stargazers_count}</p>
                <p> <b>Description :</b> {repo?.description}</p>
                <p> <b>Language :</b> {repo?.language}</p>
                <p> <b>Open Issues :</b> {repo?.open_issues}</p>
            </div>
        </div>
    );
}

export default RepositoryCard;
