import { renderUserBlock } from './user.js';
import { getUserData } from './data.js';
import { getFavoritesAmount } from './data.js';
import { renderSearchFormBlock } from './search-form.js';
import { renderSearchStubBlock } from './search-results.js';
import { searchFormHandler } from './searchFormData.js';
import { getTodosByCount } from './todos.js';
// import { renderToast } from './lib.js';

window.addEventListener('DOMContentLoaded', (): void => {
  renderUserBlock(
    getUserData().userName,
    getUserData().avatarUrl,
    getFavoritesAmount()
  );
  renderSearchFormBlock();
  renderSearchStubBlock();
  searchFormHandler();
  getTodosByCount(6);
  // renderToast(
  //   {text: 'Это пример уведомления. Используйте его при необходимости', type: 'success'},
  //   {name: 'Понял', handler: () => {console.log('Уведомление закрыто')}}
  // );
});
