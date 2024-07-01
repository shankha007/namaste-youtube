import React from "react";

const commentsData = [
  {
    name: "Shankha Shubhra Das",
    text: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
    replies: [
      {
        name: "Shankha Shubhra Das",
        text: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
        replies: [
          {
            name: "Shankha Shubhra Das",
            text: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
            replies: [
              {
                name: "Shankha Shubhra Das",
                text: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
                replies: [
                  {
                    name: "Shankha Shubhra Das",
                    text: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
                    replies: [
                      {
                        name: "Shankha Shubhra Das",
                        text: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
                        replies: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            name: "Shankha Shubhra Das",
            text: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
            replies: [],
          },
          {
            name: "Shankha Shubhra Das",
            text: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Shankha Shubhra Das",
    text: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
    replies: [
      {
        name: "Shankha Shubhra Das",
        text: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
        replies: [],
      },
    ],
  },
  {
    name: "Shankha Shubhra Das",
    text: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
    replies: [],
  },
  {
    name: "Shankha Shubhra Das",
    text: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
    replies: [],
  },
  {
    name: "Shankha Shubhra Das",
    text: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
    replies: [],
  },
  {
    name: "Shankha Shubhra Das",
    text: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
    replies: [],
  },
  {
    name: "Shankha Shubhra Das",
    text: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
    replies: [],
  },
  {
    name: "Shankha Shubhra Das",
    text: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
    replies: [],
  },
  {
    name: "Shankha Shubhra Das",
    text: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text } = data;
  return (
    <div className="flex p-2 my-4 bg-gray-100 rounded-lg">
      <img
        className="w-10 h-10"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        alt="display-picture"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="border-l border-l-black ml-4 pl-4">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="w-full p-4 mx-4">
      <h1 className="text-2xl font-bold">Comments</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
