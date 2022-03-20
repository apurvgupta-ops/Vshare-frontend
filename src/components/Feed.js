import React, { useState, useEffect } from "react";
import { client } from "../client";
import MasonaryLayout from "./MasonaryLayout";
import Spinner from "./Spinner";

const Feed = () => {
  const [loading, setLoading] = useState(false);
  if (loading) return <Spinner message={`We are updating your Feeds!`} />;
  return <div>Feed</div>;
};

export default Feed;
