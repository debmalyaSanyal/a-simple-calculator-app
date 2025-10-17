{"use": "app", "page": "/"
const { useSearchParams } = require('next/router');

function HomePage() {
  const [searchParams] = useSearchParams();

// get the current value in the input field
  const currentVal = searchParams.get('val');

// function to handle operations (add/sub/mul/div)
  function opHandler(ope) {
    searchParams.delete('val');
    searchParams.delete('op');
    searchParams.set('op', ope);
  }

  // function to handle equal
  function equalsHandler() {
    searchParams.delete('val');
    const a = parseInt(currentVal);
    const b = parseInt(searchParams.get('ope'));
    let res,		// get the previous value that was set
    prevVal = searchParams.get('val');

// determine which operation to perform
    if (searchParams.get('op') === '+'){
		res = parseInt(prevVal) + parseInt(a);
	}else if (searchParams.get('op') === '-'){
		res = parseInt(prevVal) - parseInt(a);
	}else if(searchParams.get('op') === '*'){
		res = parseInt(prevVal) * parseInt(a);
	}else if(searchParams.get('op') === '/'){
		res = parseInt(prevVal) / parseInt(a);
	}
    searchParams.delete('op');
    searchParams.set('val', res);
  }

  return (<>
    <body class="bg-gray-100">
      <header class="bg-gray-500 text-gray-100 p-4 flex justify-center">
        <h1 class="text-lg">Calculator</h1>
      </header>
      <div class="max-w-7xl m-auto py-4 p-4 bg-gray-300 mt-4 shadow-md">
        <input class="w-20 h-10 p-2 bg-gray-200 rounded m-auto" type="text" value={currentVal} disabled>
        <button class="bg-red-500 hover:bg-red-700 text-gray-100 p-3 rounded m-2" onClick={() => opHandler('0')}>0</button>
        <button class="bg-red-500 hover:bg-red-700 text-gray-100 p-3 rounded m-2" onClick={() => opHandler('1')}>1</button>
        <button class="bg-red-500 hover:bg-red-700 text-gray-100 p-3 rounded m-2" onClick={() => opHandler('2')}>2</button>
        <button class="bg-blue-500 hover:bg-blue-700 text-gray-100 p-3 rounded m-2" onClick={() => equalsHandler()}>=</button>
        <button class="bg-blue-500 hover:bg-blue-700 text-gray-100 p-3 rounded m-2" onClick={() => opHandler('+')}>+</button>
        <button class="bg-blue-500 hover:bg-blue-700 text-gray-100 p-3 rounded m-2" onClick={() => opHandler('-')}>-</button>
        <button class="bg-blue-500 hover:bg-blue-700 text-gray-100 p-3 rounded m-2" onClick={() => opHandler('X')}>X</button>
        <button class="bg-blue-500 hover:bg-blue-700 text-gray-100 p-3 rounded m-2" onClick={() => opHandler('/')}>/</button>
        <button class="bg-red-500 hover:bg-red-700 text-gray-100 p-3 rounded m-2" onClick={() => currentVal === '' ? '' : currentVal == 0 ? 1 : -currentVal == 0 ? -1 : currentVal > 0 ? (parseInt(currentVal) * -1) : (parseInt(currentVal) * 1)}>Del</button>
      </div>
      <footer class="bg-gray-500 text-gray-100 p-4 flex justify-center">
        <span class="text-sm">Made by Me</span>
      </footer>
    </body>\
    </>);
  }
  return <HomePage />;
}
export default HomePage;