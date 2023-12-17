<template>
  <div class="container">
    <div class="wrapper">
      <p class="input_box">Current Date: {{ date.toDateString() }}</p>

      <button class="days" @click="addDays(1)">Add 1 Day</button>
      <button class="months" @click="addMonths(1)">Add 1 Month</button>

      <button class="reset_date" @click="resetDate">Reset Date</button>
    </div>
  </div>
</template>

<script>
import { useDate } from "../composables/useDate";

export default {
  setup() {
    const { date, addDays, addMonths, resetDate } = useDate(new Date());

    return {
      date,
      addDays,
      addMonths,
      resetDate,
    };
  },
};
</script>

<style>
* {
  background-color: rgba(169, 203, 207, 0.521);
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.container {
  background-color: #fff;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
}

.wrapper {
  background-color: rgba(169, 203, 207, 0.521);
  height: 40vh;
  width: 40%;
  border-radius: 16px;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}
.input_box {
  background-color: rgb(216, 18, 216);
  border-radius: 10px;
  color: rgb(250, 248, 248);
  height: 40px;
  width: 250px;
  text-align: center;
  align-items: center;
  justify-content: center;
  display: flex;
  margin: 20px;
}
.days {
  background-color: rgb(44, 64, 238);
  height: 40px;
  width: 140px;
  text-align: center;
  align-items: center;
  justify-content: center;
  display: flex;
  border-style: none;
  border-radius: 10px;
  padding: 15px;
  border-style: none;
  border-radius: 10px;
  color: rgb(250, 248, 248);
  margin: 20px;
}

.months {
  background-color: rgb(153, 5, 153);
  height: 40px;
  width: 140px;
  text-align: center;
  align-items: center;
  justify-content: center;
  display: flex;
  border-style: none;
  border-radius: 10px;
  padding: 15px;
  border-style: none;
  border-radius: 10px;
  color: rgb(250, 248, 248);
  margin: 20px;
}

.day_month button {
  border-style: none;
  border-radius: 10px;
  color: rgb(250, 248, 248);
  text-align: center;
  align-items: center;
  justify-content: center;
  display: flex;
  margin: 20px;
  height: 40px;
  width: 140px;
  padding: 15px;
}

.reset_date {
  height: 40px;
  width: 140px;
  text-align: center;
  align-items: center;
  justify-content: center;
  display: flex;
  border-style: none;
  border-radius: 10px;
  padding: 15px;
  border-style: none;
  border-radius: 10px;
  color: rgb(250, 248, 248);
  margin: 20px;
  background-color: rgb(8, 153, 8);
  padding: 15px;
}



@media screen and (max-width: 1380px) {
  .wrapper {
      height: 80vh;
      width: 65%;
      border-radius: 18px;
      justify-content: center;
      align-items: center;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
    }
}

@media screen and (max-width: 960px) {
    .wrapper {
      height: 70vh;
      width: 65%;
      border-radius: 18px;
      justify-content: center;
      align-items: center;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
    }
  }



@media screen and (max-width: 600px) {
  .input_box {
    font-size: 14px;
  background-color: rgb(216, 18, 216);
    width: 70% ;
    padding: 10%;
  }

  .wrapper {
    height: 60vh;
    width: 55%;
    border-radius: 16px;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }
  button {
    font-size: 12px;
  }

  
}
</style>
