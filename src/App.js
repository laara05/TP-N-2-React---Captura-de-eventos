importar React, { useState } desde 'react';

función App() {
  const [inputTexto, setInputTexto] = useState('');

  const handleSubmit = (evento) => {
    evento.preventDefault();
    alert(`Bienvenido!: ${inputTexto}`);
  };

  return (
    <div>
      <formulario onSubmit={handleSubmit}>
        <etiqueta>
          Ingresa algún texto:
          <input type="text" value={inputTexto} onChange={(evento) => setInputTexto(evento.target.value)} />
        </etiqueta>
        <botón type="submit">Enviar</botón>
      </formulario>
    </div>
  );
}

exportar default App;