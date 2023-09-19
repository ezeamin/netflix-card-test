const cards = document.querySelectorAll('.film');

cards.forEach((card) => {
  const iframe = card.querySelector('iframe');

  iframe.addEventListener('mouseenter', () => {
    const title = iframe.getAttribute('title');
    const src = iframe.getAttribute('src');
    const modifiedSrc = src.replace('VIDEO_ID', title);
    iframe.setAttribute('src', modifiedSrc);
  });

  iframe.addEventListener('mouseleave', () => {
    setTimeout(() => {
      const title = iframe.getAttribute('title');
      const src = iframe.getAttribute('src');
      const modifiedSrc = src.replace(title, 'VIDEO_ID');
      iframe.setAttribute('src', modifiedSrc);
    }, 1200);
  });
});
