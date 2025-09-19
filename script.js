document.addEventListener('DOMContentLoaded', () => {
  const bakers = [
    { name: 'Anna Silva', role: 'Head Baker', img: 'images/anna.jpg' },
    { name: 'Marco Reyes', role: 'Pastry Chef', img: 'images/marco.jpg' },
  ];

  const grid = document.getElementById('team-grid');
  bakers.forEach(baker => {
    const card = document.createElement('div');
    card.className = 'team-card';
    card.innerHTML = `
      <img src="${baker.img}" alt="${baker.name}">
      <h3>${baker.name}</h3>
      <p>${baker.role}</p>
    `;
    grid.appendChild(card);
  });
});



// JavaScript placeholder — add any interactivity here if needed
document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('click', () => alert('Button clicked!'));
});
