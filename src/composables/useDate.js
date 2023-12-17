// src/composables/useDate.js
import { ref } from "vue";

export function useDate(initialDate) {
  const originalDate = new Date(initialDate);
  const date = ref(originalDate);

  function addDays(days) {
    const newDate = new Date(date.value);
    newDate.setDate(date.value.getDate() + days);
    date.value = newDate;
  }

  function addMonths(months) {
    const newDate = new Date(date.value);
    newDate.setMonth(date.value.getMonth() + months);
    date.value = newDate;
  }

  function resetDate() {
    date.value = new Date(originalDate);
  }

  return {
    date,
    addDays,
    addMonths,
    resetDate,
  };
}
