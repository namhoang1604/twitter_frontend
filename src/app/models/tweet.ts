export class Tweet {
  id: number;
  content: string;
  retweets: string[];
  ownerID: string;
  ownerName: string;
  createdDate: string;
  constructor(content: string) {
    this.content = content;
  }
}

export interface ITweet {
  id: number;
  content: string;
  retweets: string[];
  owner_id: string;
  owner_name: string;
  inserted_at?: string;
}

export function convertToJson(tweet: Tweet): ITweet {
  const iTweet: ITweet = {
    id: tweet.id,
    content: tweet.content,
    owner_id: tweet.ownerID,
    owner_name: tweet.ownerName,
    retweets: tweet.retweets
  };
  return iTweet;
}

export function convertToClass(json: ITweet): Tweet {
  const tweet: Tweet = {
    id: json.id,
    content: json.content,
    retweets: json.retweets,
    ownerID: json.owner_id,
    ownerName: json.owner_name,
    createdDate: json.inserted_at
  };
  return tweet;
}
