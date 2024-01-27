const menuData = [
  // Menu com submenu
  {
    label: 'Quem somos', // Nome da sessão
    path: '#quemSomos', // Link "não recomendado"
    submenu: [
      { label: 'O que fazemos', path: '#' }, // Itens do submenu com link ID
      { label: 'Por que escolher', path: '#' }, // Itens do submenu com link ID
      // Adicione mais itens conforme necessário
    ],
  },
  { label: 'Portfólio', path: '#portfolio' }, // Itens do menu com link ID
  { label: 'Presença', path: '#presenca' }, // Itens do menu com link ID
  { label: 'Contato', path: '#contato' }, // Itens do menu com link ID
  ];
  
export default menuData;