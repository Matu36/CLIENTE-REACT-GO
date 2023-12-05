import React, { useState, useEffect } from "react";
import BasicLayout from "../../layout/BasicLayout/BasicLayout";
import ListTweets from "../../components/ListTweets";
import { getTweetsFollowersAPI } from "../../api/tweet";

import "./Home.scss";

export default function Home(props) {
  const { setRefreshCheckLogin } = props;
  const [tweets, setTweets] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getTweetsFollowersAPI(page).then((response) => {
      setTweets(formatModel(response));
    });
  }, [page]);

  return (
    <BasicLayout className="home" setRefreshCheckLogin={setRefreshCheckLogin}>
      <div className="tome__title">
        <h2> Inicio </h2>
      </div>

      {tweets && <ListTweets tweets={tweets} />}
      <p>Cargar más Tweets</p>
    </BasicLayout>
  );
}

function formatModel(tweets) {
  const tweetsTemp = [];

  tweets.forEach((tweet) => {
    tweetsTemp.push({
      _id: tweet._id,
      userId: tweet.userRelationId,
      mensaje: tweet.Tweet.mensaje,
      fecha: tweet.Tweet.fecha,
    });
  });
  return tweetsTemp;
}
