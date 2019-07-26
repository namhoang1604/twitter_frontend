export class Tweet {
  id: number;
  content: string;
  retweets: number;
  constructor(content: string) {
    this.content = content;
  }
}

export interface ITweet {
  id: number;
  content: string;
  retweets: number;
}

export function convertToJson(tweet: Tweet): ITweet {
  const iTweet: ITweet = {
    id: tweet.id,
    content: tweet.content,
    retweets: tweet.retweets
  };
  return iTweet;
}

export function convertToClass(json: ITweet): Tweet {
  const tweet: Tweet = {
    id: json.id,
    content: json.content,
    retweets: json.retweets
  };
  return tweet;
}
