(function () {
  const { useState } = React;

  function ReactColorDemo() {
    const [textColor, setTextColor] = useState('black');

    return React.createElement('div', null, [
      React.createElement(
        'p',
        {
          key: 'text',
          style: { color: textColor }
        },
        'A cor vai mudar aqui'
      ),
      React.createElement(
        'button',
        {
          key: 'button',
          onClick: function () {
            setTextColor('red');
          }
        },
        'Mudar cor'
      )
    ]);
  }

  const root = ReactDOM.createRoot(document.getElementById('react-root'));
  root.render(React.createElement(ReactColorDemo));
})();
