
  document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.week-days button');
    const tables = document.querySelectorAll('.schedule-table');

    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        const selectedDay = btn.getAttribute('data-day');

        // Update active button
        buttons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Show the selected day's table and hide others
        tables.forEach(table => {
          if (table.getAttribute('data-day') === selectedDay) {
            table.style.display = 'table';
          } else {
            table.style.display = 'none';
          }
        });
      });
    });
  });

