{
  function sparanWrap(word) {
    return [...word].map(letter => `<span>${letter}</span>`).join('')
  }

  const splits = document.querySelectorAll('[data-behavior="span-split"]');
  for (split of splits) {
    split.innerHTML = sparanWrap(split.textContent);
  }
}

