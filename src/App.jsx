import Icon from "./components/Icon"

function App() {
  return (
    <div className="App">
      <h1>Mi Portafolio - Componente Icon Optimizado</h1>
      
      <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <h2>Iconos básicos</h2>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <Icon name="home" size={32} color="blue" />
          <Icon name="user" size={32} color="green" />
          <Icon name="contact" size={32} color="purple" />
          <Icon name="folder" size={32} color="orange" />
        </div>

        <h2>Iconos sólidos</h2>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <Icon name="home-solid" size={40} color="red" />
          <Icon name="user-solid" size={40} color="darkblue" />
          <Icon name="contact-solid" size={40} color="darkgreen" />
          <Icon name="folder-solid" size={40} color="darkorange" />
        </div>

        <h2>Iconos especiales</h2>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <Icon name="road" size={28} color="brown" />
          <Icon name="sword" size={28} color="gray" />
          <Icon name="migang-isotipo" size={60} color="#373435" />
        </div>

        <h2>Diferentes tamaños</h2>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <Icon name="home" size={16} color="black" />
          <Icon name="home" size={24} color="black" />
          <Icon name="home" size={32} color="black" />
          <Icon name="home" size={48} color="black" />
          <Icon name="home" size={64} color="black" />
        </div>

        <h2>Con clases CSS personalizadas</h2>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <Icon 
            name="user" 
            size={36} 
            color="teal" 
            className="custom-icon"
            style={{ filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.3))' }}
          />
          <Icon 
            name="contact" 
            size={36} 
            color="crimson" 
            className="custom-icon"
            style={{ transform: 'rotate(15deg)' }}
          />
        </div>

        <h2>Logotipos MiGaNg</h2>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center', flexWrap: 'wrap' }}>
          <Icon name="migang-logotipo" size={120} color="#373435" />
          <Icon name="migang-imagotipo" size={100} color="#373435" />
        </div>
      </div>
    </div>
  )
}

export default App
