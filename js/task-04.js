let counterValue = 0;
const decrementListenerBtn = document.querySelector('[data-action="decrement"]');
const incrementListenerBtn = document.querySelector('[data-action="increment"]');
const counterValueSpan = document.querySelector('#value');

const handleClickDecrement = () => {
    counterValue -= 1;
    updateCounterValue(counterValue);    
  };
  
  const handleClickIncrement = () => {    
    counterValue += 1;
    updateCounterValue(counterValue);    
  };

  const updateCounterValue = (counterValue) => {
    counterValueSpan.textContent = counterValue;
  }

  decrementListenerBtn.addEventListener("click", handleClickDecrement, updateCounterValue);
  incrementListenerBtn.addEventListener("click", handleClickIncrement, updateCounterValue);