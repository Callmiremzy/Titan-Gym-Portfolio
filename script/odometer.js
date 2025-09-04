
  const counters = document.querySelectorAll('.counter');
  const speed = 500; // lower is faster

  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText;

      const increment = Math.ceil(target / speed);

      if (count < target) {
        counter.innerText = count + increment;
        setTimeout(updateCount, 20);
      } else {
        counter.innerText = target.toLocaleString(); // format with commas
      }
    };

    updateCount();
  });
