const tasks = {
    ticket_1: {
        one: {
            title: "Двоично — десятичная система счисления.",
            text: "Двоично-десятичная система счисления - это способ записи чисел, использующий двоичные (бинарные) и десятичные цифры. В этой системе каждая цифра в числе может быть либо двоичной (0 или 1), либо десятичной (0-9)."
        },
        two: {
            title: "4-х разрядное арифметико логическое устройство. Графическое обозначение.",
            text: "text2"
        },
        third: {
            title: `В онлайн-программе Tinkercad — собрать схему с использованием Arduino – UNO,
            фоторезистора и светодиода. Написать программный код для работы схемы. При затемнении
            фоторезистора, светодиод включается.`,
            image: "./img/image_1.jpeg",
            code: `
            #define PIN_LED 13
            #define PIN_PHOTO_SENSOR A0
            
            void setup() {
              Serial.begin(9600);
              pinMode(PIN_LED, OUTPUT);
            }
            
            void loop() {
              int val = analogRead(PIN_PHOTO_SENSOR);
              Serial.println(val);
              if (val < 300) {
                digitalWrite(PIN_LED, HIGH);
              } else {
                digitalWrite(PIN_LED, LOW);
              }
            }`
        }
    }
};
