import { legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

const INITIAL_STATE = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

function criarCor() {
    const oneChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
    let cor = '#';
    const aleatorio = () => Math.floor(Math.random() * oneChar.length);
    for (let i = 0; i < 6; i += 1) {
        cor += oneChar[aleatorio()];
    }
    return cor;
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'NEXT_COLOR':
      return {
        ...state,
        index: state.index === state.colors.length - 1 ? 0 : state.index + 1,
      };
    case 'PREVIOUS_COLOR':
      return {
        ...state,
        index: state.index === 0 ? state.colors.length - 1 : state.index - 1,
      };
      case 'RANDOM_COLOR' : 
      const newColor = criarCor()
      state.colors.push(newColor)
      return {
        ...state,
        index: state.colors.indexOf(newColor)
      }
    default:
      return state;
  }
};

const store = createStore(reducer, composeWithDevTools());

const previousButton = document.getElementById('previous');
const nextButton = document.getElementById('next');
const randomButton = document.getElementById('random')

previousButton.addEventListener('click', () => {
  store.dispatch({ type: 'PREVIOUS_COLOR' });
});

nextButton.addEventListener('click', () => {
  store.dispatch({ type: 'NEXT_COLOR' });
});

randomButton.addEventListener('click', () => {
    store.dispatch({type: 'RANDOM_COLOR'})
})

store.subscribe(() => {
    const { colors, index } = store.getState()
    const colorValue = document.getElementById('value')
    colorValue.innerHTML =  colors[index]
    const containerColor = document.getElementById('container')
    containerColor.style.backgroundColor = colors[index]
})
