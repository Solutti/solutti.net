const menuData = [
  // Menu com submenu
  {
    label: 'Serviços', // Nome da sessão
    path: '#', // Link "não recomendado"
    submenu: [
      { label: 'Internet Residencial', path: 'https://residencial.solutti.net' }, // Itens do submenu com link ID
      //{ label: 'Por que escolher', path: '#escolher' }, // Itens do submenu com link ID
      // Adicione mais itens conforme necessário
    ],
  },
  {
    label: 'Quem somos', // Nome da sessão
    path: '#quemSomos', // Link "não recomendado"
    submenu: [
      { label: 'O que fazemos', path: '#fazemos' }, // Itens do submenu com link ID
      { label: 'Por que escolher', path: '#escolher' }, // Itens do submenu com link ID
      // Adicione mais itens conforme necessário
    ],
  },
  { label: 'Portfólio', path: '#portfolio' }, // Itens do menu com link ID
  { label: 'Presença', path: '#presenca' }, // Itens do menu com link ID
  { label: 'Contato', path: '#contato' }, // Itens do menu com link ID
  ];
  
export default menuData;
