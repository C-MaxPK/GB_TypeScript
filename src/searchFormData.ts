interface SearchFormData {
  city: string,
  checkInDate: string,
  checkOutDate: string,
  maxPrice: string
}

const executeSearch = (dataForSearch: SearchFormData) => {
  console.log('Город -', dataForSearch.city);
  console.log('Дата въезда -', dataForSearch.checkInDate);
  console.log('Дата выезда -', dataForSearch.checkOutDate);
  console.log('Макс. цена -', dataForSearch.maxPrice);
}

export const searchFormHandler = () => {
  const searchForm = document.querySelector('.searchForm');

  searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const city = document.getElementById('city') as HTMLInputElement;
    const checkInDate = document.getElementById('check-in-date') as HTMLInputElement;
    const checkOutDate = document.getElementById('check-out-date') as HTMLInputElement;
    const maxPrice = document.getElementById('max-price') as HTMLInputElement;

    const dataForSearch: SearchFormData = {
      city: city.value,
      checkInDate: checkInDate.value,
      checkOutDate: checkOutDate.value,
      maxPrice: maxPrice.value
    };

    executeSearch(dataForSearch);
  });
};
