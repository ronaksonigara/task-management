import { TASk_TYPES } from './types';

const INITIAL_STATE = {
  todo: [
    {
      title: 'Prepare Mother Board for website',
      description: '',
      users: ['abc a'],
      comments: ['abc'],
      attachments: ['a'],
      estimateDate: new Date(),
      image:
        'https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png'
    },
    {
      title: 'Prepare Mother Board for website',
      description: '',
      users: ['abc a'],
      estimateDate: new Date('10/10/2019')
    },
    {
      title: 'Prepare Mother Board for website',
      description: '',
      users: ['abc a'],
      estimateDate: ''
    }
  ],
  inProgress: [
    {
      title: 'Prepare Mother Board for website',
      description: '',
      users: ['abc a'],
      estimateDate: ''
    }
  ],
  inReview: [],
  done: []
};

const tasks = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TASk_TYPES.REORDER:
      return {
        ...state,
        ...action.payload
      };
    case TASk_TYPES.ADD_TASK:
      return {
        ...state,
        todo: [...state.todo, action.payload]
      };
    default:
      return state;
  }
};

export default tasks;
