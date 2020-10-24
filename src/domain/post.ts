export default class Post{

  userId: Number;

  id: Number;

  title: string;

  body: string;

  constructor(userId, id, title, body){
    this.userId = userId;
    this.id = id;
    this.title = title;
    this.body = body;
  }// constructor()

}// Post
