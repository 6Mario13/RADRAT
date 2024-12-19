const questions = [
  {
    id: 0,
    question: "Where do you want to ride?",
    answers: [
      { text: 'Open roads', nextQuestionId: 1, image: '../src/assets/road.png' },
      { text: 'Dirty trails', nextQuestionId: 2, image: '../src/assets/mtb.png'},
      { text: 'City streets', nextQuestionId: 3, image: '../src/assets/city.png'},
      { text: 'Gravel roads', nextQuestionId: 4, image: '../src/assets/gravel.png'},
    ],
  },
  {
    id: 1,
    question: "What's the purpose of your riding?",
    answers: [
      { text: 'Performance, racing', nextQuestionId: 5, image: '../src/assets/racing1.png' },
      { text: 'Recreation, Fitness, Fun', nextQuestionId: 6, image: '../src/assets/recreation.png' },
    ],
  },
  {
    id: 2,
    question: "What type of trails is most importan to you?",
    answers: [
      { text: 'Smooth and fast cross-country trails', nextQuestionId: 7, image: '../src/assets/smooth.png' },
      { text: 'Steep and rocky technical trails', nextQuestionId: 8, image: '../src/assets/steep.png' },
    ],
  },
  {
    id: 3,
    question: "What's the purpose of your riding?",
    answers: [
      { text: 'Commute, work, shopping', nextQuestionId: 9, image: '../src/assets/commute.png' },
      { text: 'Recreation, Fitness, Fun', nextQuestionId: 10, image: '../src/assets/fitBike2.png' },
    ],
  },
  {
    id: 4,
    question: "What position on the bike is more important to you?",
    answers: [
      { text: 'Possibility to adjust the riding position with drop handlebar', nextQuestionId: 11, image: '../src/assets/drop.png' },
      { text: 'Comfortable with flat handlebar', nextQuestionId: 12, image: '../src/assets/flat.png' },
    ],
  },
  {
    id: 5,
    question: "What type of racing is most important to you?",
    answers: [
      { text: 'General cycling competitions' , nextQuestionId: 13,image: '../src/assets/racing.png' },
      { text: 'Triathlon', nextQuestionId: 14, image: '../src/assets/triathlon.png' },
    ],
  },
  {
    id: 6,
    question: "What position on the bike is more important to you?",
    answers: [
      { text: 'Comfortable with flat handlebar', nextQuestionId: 15, image: '../src/assets/flat.png' },
      { text: 'Possibility to adjust the riding position with drop handlebar', nextQuestionId: 16, image: '../src/assets/drop.png' },
    ],
  },
  {
    id: 7,
    question: "What type of suspension would you like on your bike?",
    answers: [
      { text: 'I want a front and rear shock', nextQuestionId: 17, image: '../src/assets/frontRear.png' },
      { text: 'I only want a front shock', nextQuestionId: 18, image: '../src/assets/front.png' },
    ],
  },
  {
    id: 8,
    question: "Do you need electric motor support?",
    answers: [
      { text: 'I want an electric bike with a motor to assist me', nextQuestionId: 19, image: '../src/assets/electricMotor.png'  },
      { text: 'No, I do not want an electric bike', nextQuestionId: 20, image: '../src/assets/crankset.png' },
    ],
  },
  {
    id: 9,
    question: "Do you need your bike to be foldable?",
    answers: [
      { text: 'I would like to be able to transport on public transport', nextQuestionId: 21, image: '../src/assets/foldBike.png' },
      { text: 'No, I do not need folding bike', nextQuestionId: 22, image: '../src/assets/urbanBike.png'},
    ],
  },
  {
    id: 10,
    question: "What character do you want your bike to represent?",
    answers: [
      { text: 'I want a more classic look', nextQuestionId: 23, image: '../src/assets/classic.png' },
      { text: 'I want it to be more sporty', nextQuestionId: 24, image: '../src/assets/fitBike.png' },
    ],
  },
  {
    id: 11,
    question: "What's the purpose of your riding?",
    answers: [
      { text: 'All-road riding with no additional equipment', nextQuestionId: 25, image: '../src/assets/gravelNoEquip.png' },
      { text: 'Bikepacking and touring', nextQuestionId: 26, image: '../src/assets/gravelEquip.png' },
    ],
  },
  {
    id: 12,
    question: "Do you need electric motor support?",
    answers: [
      { text: 'I want an electric bike with a motor to assist me', nextQuestionId: 27, image: '../src/assets/electricMotor.png' },
      { text: 'No, I want to rely only on my muscles', nextQuestionId: 28, image: '../src/assets/noElectric.png' },
    ],
  },
  {
    id: 13,
    type: 'card',
    title: 'Light weight aero road bike',
    image: '../src/assets/roadBike.png',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A autem dolore commodi?',
  },
  {
    id: 14,
    type: 'card',
    title: 'Triathlon performance bike',
    image: '../src/assets/triathlonBike.png',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A autem dolore commodi?',
  },
  {
    id: 15,
    type: 'card',
    title: 'Hybrid bike',
    image: '../src/assets/crossBike.png',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A autem dolore commodi?',
  },
  {
    id: 16,
    type: 'card',
    title: 'Classic road bike',
    image: '../src/assets/classicRoad.png',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A autem dolore commodi? Lorem ipsum dolor sit amet consectetur adipisicing elit. A autem dolore commodi? ',
  },
  {
    id: 17,
    type: 'card',
    title: 'Full-suspension MTB',
    image: '../src/assets/fullSus.png',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A autem dolore commodi?',
  },
  {
    id: 18,
    type: 'card',
    title: 'Hardtail MTB',
    image: '../src/assets/hardtail2.png',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A autem dolore commodi?',
  },
  {
    id: 19,
    type: 'card',
    title: 'Full-suspension e-MTB',
    image: '../src/assets/ebikeFullSus 1.png',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A autem dolore commodi?',
  },
  {
    id: 20,
    type: 'card',
    title: 'Downhill bike',
    image: '../src/assets/downhillBike.png',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A autem dolore commodi?',
  },
  {
    id: 21,
    type: 'card',
    title: 'Folding bicycle',
    image: '../src/assets/brompton.png',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A autem dolore commodi?',
  },
  {
    id: 22,
    type: 'card',
    title: 'Urban',
    image: '../src/assets/urban.png',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A autem dolore commodi?',
  },
  {
    id: 23,
    type: 'card',
    title: 'Classic city bicycle',
    image: '../src/assets/classicBike.png',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A autem dolore commodi?',
  },
  {
    id: 24,
    type: 'card',
    title: 'Fitnes bike',
    image: '../src/assets/hybridBike 1.png',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A autem dolore commodi?',
  },
  {
    id: 25,
    type: 'card',
    title: 'Gravel bike',
    image: '../src/assets/gravelBike.png',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A autem dolore commodi?',
  },
  {
    id: 26,
    type: 'card',
    title: 'Gravel bike for bikepacking',
    image: '../src/assets/bikepacking.png',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A autem dolore commodi?',
  },
  {
    id: 27,
    type: 'card',
    title: 'Treking e-bike',
    image: '../src/assets/trekingEbike.png',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A autem dolore commodi?',
  },
  {
    id: 28,
    type: 'card',
    title: 'Treking bike',
    image: '../src/assets/treking.png',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A autem dolore commodi?',
  },
];

export default questions;
