<template>
    <div id="app">
        <h2 class="text-muted subtitle">
            Конвертер единиц длинны
        </h2>
        <div class="convert-wrapper">
            <div class="convert-form">
                <b-form-group
                    id="fieldset-1"
                    class="convert-form-group"
                    label="Исходное значение"
                    label-for="input-1"
                    invalid-feedback="Неверное значение"
                    :state="startValidate"
                >
                    <b-form-input id="input-1" v-model="startValue" :state="startValidate" trim></b-form-input>
                    <b-form-select v-model="selectedStartMeasure" :options="options"></b-form-select>
                </b-form-group>
                <div class="convert-form-symbol"> = </div>
                <b-form-group
                    id="fieldset-2"
                    class="convert-form-group"
                    label="Результат"
                    label-for="input-2"
                >
                    <b-form-input id="input-1" :value="finishValue" disabled readonly trim></b-form-input>
                    <b-form-select v-model="selectedFinishMeasure" :options="options"></b-form-select>
                </b-form-group>
            </div>

            <b-button block variant="primary" :disabled="notValidInputs" @click="onResult">Расчитать</b-button>
            <b-button block :disabled="!isRotateActive" @click="onRotate">Перевернуть единицы</b-button>
        </div>
    </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
        startValue: '',
        finishValue: '',
        selectedStartMeasure: null,
        selectedFinishMeasure: null,
        options: [
          { value: null, text: 'Выберите единицу длинны' },
          { value: { val: 'mm' }, text: 'Миллиметры (ММ)' },
          { value: { val: 'sm' }, text: 'Сантиметры (СМ)' },
          { value: { val: 'm' }, text: 'Метры (М)' },
          { value: { val: 'km' }, text: 'Километры (КМ)' },
        ]
    }
  },
  computed: {
    startValidate() {
        return !isNaN(Number(this.startValue));
    },
    isRotateActive() {
        return this.selectedStartMeasure && this.selectedFinishMeasure;
    },
    notValidInputs() {
        return !this.startValue || !this.selectedStartMeasure || !this.selectedFinishMeasure
    },
  },
  methods: {
    onResult() {
        const startMeasure = this.selectedStartMeasure?.val;
        const finishMeasure = this.selectedFinishMeasure?.val;
        const valueToMeters = this.convertToMeters(this.startValue, startMeasure);
        let value = '';
            switch (finishMeasure) {
                case 'mm':
                    value = valueToMeters * 1000
                    break;
                case 'sm':
                    value = valueToMeters * 100
                    break;
                case 'm':
                    value = valueToMeters
                    break;
                case 'km':
                    value = valueToMeters / 1000;
                    break;
            }
        this.startValue = Math.trunc(Number(this.startValue));
        this.finishValue = value;
    },
    convertToMeters(val, mes) {
        const fixedVal = Number(val).toFixed(2);
        switch (mes) {
            case 'mm':
                return Number(fixedVal) / 1000
            case 'sm':
                return Number(fixedVal) / 100
            case 'm':
                return Number(fixedVal)
            case 'km':
                return Number(fixedVal) * 1000
        }
    },
    onRotate() {
        const buffer = structuredClone(this.selectedStartMeasure);
        this.selectedStartMeasure = structuredClone(this.selectedFinishMeasure);
        this.selectedFinishMeasure = buffer;
    },
  },
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.convert-wrapper {
    width: 1200px;
    padding: 20px;
    margin: 0 auto;
}

.convert-form {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
}

.convert-form-group {
    width: 500px;
}

.convert-form-symbol {
    font-size: 60px;
    line-height: 60px;
}
</style>
