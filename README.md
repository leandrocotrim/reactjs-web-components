# Web Components with ReactJS

## Code of Web Component
```html
      <new-button 
        text="Eu sou um WebComponent com ReactJs. Click para aciona um evento externo.">
      </new-button>

      <button onclick="trocarTexto()">Trocar texto do botão ReactJs</button>

      <button onclick="adicionarProperty()">Adicionar property 'onClick' no botão ReactJs</button>
```

## Code for manipulation
```javascript
    function trocarTexto() {
      document.querySelector('new-button')
        .setAttribute('text', 
          'Texto do botão ReactJs trocado as ' + new Date().toTimeString());      
    }

    function adicionarProperty() {
      document.querySelector('new-button').setProperty('onClick', function(text) { alert(text); });
    }
```

## Run
` npx live-server --port=9090`

### Reference
https://itnext.io/react-and-web-components-3e0fca98a593
