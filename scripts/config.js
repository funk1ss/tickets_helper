const tasks = {
    ticket_1: {
        one: {
            title: "Двоично — десятичная система счисления.",
            text1: "Двоично-десятичная система счисления - это способ записи чисел, использующий двоичные (бинарные) и десятичные цифры. В этой системе каждая цифра в числе может быть либо двоичной (0 или 1), либо десятичной (0-9).",
            image1: "",
            text2: "",
            image2: "",
          },
        two: {
            title: "4-х разрядное арифметико логическое устройство. Графическое обозначение.",
            text1: "Графическое обозначение",
            image1: "./img/1/1.2.1.jpeg",
            text2: "",
            image2: "",
        },
        third: {
            title: `В онлайн-программе Tinkercad — собрать схему с использованием Arduino – UNO,
            фоторезистора и светодиода. Написать программный код для работы схемы. При затемнении
            фоторезистора, светодиод включается.`,
            image: "./img/1/1.3.2.jpeg",
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
    },
    ticket_2: {
      one: {
          title: "Двоично — шестнадцатиричная система счисления.",
          text1: "Двоично-шестнадцатеричная система счисления сочетает в себе двоичную (с основанием 2) и шестнадцатеричную (с основанием 16) системы. Она используется для удобства представления больших двоичных чисел в более компактной форме.",
          image1: "",
          text2: "",
          image2: "",
        },
      two: {
          title: "Микроконтроллер. Описание.",
          text1: "Микроконтроллер — это маленький интегральный микросхемный компьютер, который включает в себя процессор (обычно с ограниченными вычислительными ресурсами), память (для хранения программ и данных), и различные периферийные устройства, такие как порты ввода-вывода (для подключения датчиков, актуаторов и других устройств), таймеры, счетчики и другие функциональные блоки.",
          image1: "",
          text2: "",
          image2: "",
      },
      third: {
          title: `В онлайн-программе Tinkercad — собрать схему с использованием Arduino – UNO,
          фоторезистора и светодиода. Написать программный код для работы схемы. При затемнении
          фоторезистора, светодиод выключается.
          `,
          image: "./img/2/2.3.1.jpeg",
          code: `#define PIN_LED 13
          #define PIN_PHOTO_SENSOR A0
          
          void setup() {
            Serial.begin(9600);
            pinMode(PIN_LED, OUTPUT);
          }
          
          void loop() {
            int val = analogRead(PIN_PHOTO_SENSOR);
            Serial.println(val);
            if (val < 300) {
              digitalWrite(PIN_LED, LOW);
            } else {
              digitalWrite(PIN_LED, HIGH);
            }
          }`
      }
  },
  ticket_3: {
    one: {
        title: "Логический элемент «НЕ». Графическое обозначение, таблица истинности.",
        text1: "Графическое обозначение:",
        image1: "./img/3/3.1.1.jpeg",
        text2: "Таблица истинности: ",
        image2: "./img/3/3.1.2.jpeg",
    },
    two: {
        title: "Дещифратор на 2 входа. Графическое обозначение, таблица истинности.",
        text1: "Графическое обозначение:",
        image1: "./img/3/3.2.1.jpeg",
        text2: "Таблица истинности:",
        image2: "./img/3/3.2.2.jpeg",
    },
    third: {
        title: `В онлайн-программе Tinkercad — собрать схему с использованием Arduino – UNO, одной
        тактовой кнопки и светодиода. Написать программный код для работы схемы. При нажатии
        кнопки, светодиод включается.
        `,
        image: "./img/3/3.3.1.jpeg",
        code: `
        #define Button 2 
        #define led 10
        
        void setup() {
          Serial.begin(9600);
         pinMode(led, OUTPUT);
          pinMode(Button, INPUT);
        }
        
        void loop() {
          if (digitalRead(Button) == LOW) {
            digitalWrite(led, HIGH);
          }
              else {
                digitalWrite(led, LOW);
              }
        }`
    }
}
,
  ticket_4: {
    one: {
        title: "Логический элемент «2 И». Графическое обозначение, таблица истинности",
        text1: "Графическое обозначение, таблица истинности: ",
        image1: "./img/4/4.1.1.jpeg",
        text2: "",
        image2: "",
    },
    two: {
        title: "Дешифратор на 3 входа. Графическое обозначение, таблица истинности.",
        text1: "Графическое обозначение, таблица истинности: ",
        image1: "./img/4/4.2.1.jpeg",
        text2: "",
        image2: "",
    },
    third: {
        title: `В онлайн-программе Tinkercad — собрать схему с использованием Arduino – UNO, одной
        тактовой кнопки и светодиода. Написать программный код для работы схемы. При нажатии
        кнопки, светодиод выключается.`,
        image: "./img/4/4.3.1.jpeg",
        code: `
        #define Button 2 
        #define led 10
        
        void setup() {
          Serial.begin(9600);
         pinMode(led, OUTPUT);
          pinMode(Button, INPUT);
        }
        
        void loop() {
          if (digitalRead(Button) == LOW) {
            digitalWrite(led, LOW);
          }
              else {
                digitalWrite(led, HIGH);
              }
        }`
    }
}
,
  ticket_5: {
    one: {
        title: "Логический элемент «3 И». Графическое обозначение, таблица истинности.",
        text1: "",
        image1: "./img/5/5.1.1.jpeg",
        text2: "",
        image2: "./img/5/5.1.2.png",
    },
    two: {
        title: "Дешифратор на 4 входа. Графическое обозначение, таблица истинности.",
        text1: "",
        image1: "./img/5/5.2.1.jpg",
        text2: "",
        image2: "./img/5/5.2.2.jpeg",
    },
    third: {
        title: `В онлайн-программе Tinkercad — собрать схему с использованием Arduino – UNO, резистора
        переменного сопротивления и светодиода. Написать программный код для работы схемы.
        При вращении ручки резистора переменного сопротивления, изменяется яркость свечения
        светодиода.`,
        image: "./img/5/5.3.1.jpeg",
        code: `
        const int potPin = A0;  
        const int ledPin = 10;
        
        void setup() {
          pinMode(ledPin, OUTPUT);
        }
        
        void loop() {
          int potValue = analogRead(potPin);  
          int brightness = map(potValue, 0, 1023, 0, 255); 
          analogWrite(ledPin, brightness);  
        }`
    }
},
ticket_6: {
  one: {
      title: "Логический элемент «4 И». Графическое обозначение, правило для логического элемента.",
      text1: "",
      image1: "./img/6/6.1.1.jpeg",
      text2: "",
      image2: "./img/6/6.1.2.jpeg",
  },
  two: {
      title: "Дещифратор для семисегментного индикатора. Графическое обозначение, таблица истинности.",
      text1: "",
      image1: "img/6/6.2.1.jpeg",
      text2: "",
      image2: "img/6/6.2.2.png",
  },
  third: {
      title: `В онлайн-программе Tinkercad — собрать схему с использованием Arduino – UNO, одной
      тактовой кнопки и светодиода. Написать программный код для работы схемы. При нажатии
      кнопки, светодиод включается, при следующем нажатии кнопки светодиод выключается.`,
      image: "",
      code: ``
  }
},
ticket_7: {
  one: {
      title: "Логический элемент «5 И». Графическое обозначение, правило для логического элемента.",
      text1: "",
      image1: "",
      text2: "",
      image2: "",
  },
  two: {
      title: "Шифратор. Графическое обозначение, таблица истинности.",
      text1: "",
      image1: "",
      text2: "",
      image2: "",
  },
  third: {
      title: `В онлайн-программе Tinkercad — собрать схему с использованием Arduino – UNO, одной
      тактовой кнопки и двух светодиодов. Написать программный код «Т - триггер» для работы
      схемы.
      `,
      image: "",
      code: ``
  }
},
ticket_8: {
  one: {
      title: "Логический элемент «Исключающее ИЛИ». Графическое обозначение, таблица истинности.",
      text1: "",
      image1: "",
      text2: "",
      image2: "",
  },
  two: {
      title: "RS - триггер. Графическое обозначение, таблица истинности.",
      text1: "",
      image1: "",
      text2: "",
      image2: "",
  },
  third: {
      title: `В онлайн-программе Tinkercad — собрать схему с использованием Arduino – UNO, одной
      тактовой кнопки и двух светодиодов. Написать программный код для работы схемы. При
      нажатии кнопки, первый светодиод включен, второй светодиод выключен, при следующем
      нажатии кнопки первый светодиод выключен, второй светодиод включен.`,
      image: "",
      code: ``
  }
},
ticket_9: {
  one: {
      title: "Логический элемент «7 И». Графическое обозначение, правило для логического элемента.",
      text1: "",
      image1: "",
      text2: "",
      image2: "",
  },
  two: {
      title: "D - триггер. Графическое обозначение, таблица истинности.",
      text1: "",
      image1: "",
      text2: "",
      image2: "",
  },
  third: {
      title: `В онлайн-программе Tinkercad — собрать схему с использованием Arduino – UNO, двух
      тактовых кнопок и двух светодиодов. Написать программный код «RS - триггер» для работы
      схемы.
      `,
      image: "",
      code: ``
  }
},
ticket_10: {
  one: {
      title: "Логический элемент «8 И». Графическое обозначение, правило для логического элемента.",
      text1: "",
      image1: "",
      text2: "",
      image2: "",
  },
  two: {
      title: "T - триггер. Графическое обозначение, таблица истинности.",
      text1: "",
      image1: "",
      text2: "",
      image2: "",
  },
  third: {
      title: `В онлайн-программе Tinkercad — собрать схему с использованием Arduino – UNO, трех
      тактовых кнопок и двух светодиодов. Написать программный код «JK - триггер» для работы
      схемы.
      `,
      image: "",
      code: ``
  }
},
ticket_11: {
  one: {
    title: "Логический элемент «2 ИЛИ». Графическое обозначение, правило для логического элемента.",
    text1: "",
    image1: "",
    text2: "",
    image2: "",
  },
  two: {
      title: "JK - триггер. Графическое обозначение, таблица истинности.",
      text1: "",
      image1: "",
      text2: "",
      image2: "",
  },
  third: {
      title: `В онлайн-программе Tinkercad — собрать схему с использованием Arduino – UNO, двух
      тактовых кнопок и двух светодиодов. Написать программный код «D - триггер» для работы
      схемы.`,
      image: "",
      code: ``
  }
},
ticket_12: {
  one: {
    title: `Логический элемент «Исключающее ИЛИ-НЕ». Графическое обозначение, таблица
    истинности.`,
    text1: "",
    image1: "",
    text2: "",
    image2: "",
  },
  two: {
      title: `Параллельный 4-х разрядный регистр. Графическое обозначение.`,
      text1: "",
      image1: "",
      text2: "",
      image2: "",
  },
  third: {
      title: `В онлайн-программе Tinkercad — собрать схему с использованием Arduino – UNO, трех
      светодиодов. Написать программный код «Последовательное включение одного светодиода
      «Бегущий огонь»» для работы схемы.`,
      image: "",
      code: ``
  }
},
ticket_13: {
  one: {
    title: `Логический элемент «4 ИЛИ». Графическое обозначение, правило для логического элемента.`,
    text1: "",
    image1: "",
    text2: "",
    image2: "",
  },
  two: {
      title: `Параллельный 8-ми разрядный регистр. Графическое обозначение.`,
      text1: "",
      image1: "",
      text2: "",
      image2: "",
  },
  third: {
      title: `В онлайн-программе Tinkercad — собрать схему с использованием Arduino – UNO, четырех
      светодиодов. Написать программный код «Последовательное «движение» двух включенных
      светодиодов» для работы схемы.
      `,
      image: "",
      code: ``
  }
},
ticket_14: {
  one: {
    title: `Логический элемент «5 ИЛИ». Графическое обозначение, правило для логического элемента.`,
    text1: "",
    image1: "",
    text2: "",
    image2: "",
  },
  two: {
      title: `Параллельно - последовательный регистр. Графическое обозначение.`,
      text1: "",
      image1: "",
      text2: "",
      image2: "",
  },
  third: {
      title: `В онлайн-программе Tinkercad — собрать схему с использованием Arduino – UNO, четырех
      светодиодов. Написать программный код «Накапливающееся включение светодиодов: 1, 2, 3,
      4 включенных светодиодов» для работы схемы.
      `,
      image: "",
      code: ``
  }
},
ticket_15: {
  one: {
    title: `Логический элемент «6 ИЛИ». Графическое обозначение, правило для логического элемента.
    `,
    text1: "",
    image1: "",
    text2: "",
    image2: "",
  },
  two: {
      title: `Последовательно - параллельный регистр. Графическое обозначение.`,
      text1: "",
      image1: "",
      text2: "",
      image2: "",
  },
  third: {
      title: `В онлайн-программе Tinkercad — собрать схему с использованием Arduino – UNO, четырех
      светодиодов. Написать программный код «Выключение светодиодов: 4, 3, 2, 1 включенных
      светодиодов» для работы схемы.
      `,
      image: "",
      code: ``
  }
},
ticket_16: {
  one: {
    title: `Логический элемент «7 ИЛИ». Графическое обозначение, правило для логического элемента.`,
    text1: "",
    image1: "",
    text2: "",
    image2: "",
  },
  two: {
      title: `Полусумматор. Графическое обозначение, таблица истинности.`,
      text1: "",
      image1: "",
      text2: "",
      image2: "",
  },
  third: {
      title: `В онлайн-программе Tinkercad — собрать схему с использованием Arduino – UNO, одного
      трех цветного (RGB) светодиода. Написать программный код «Плавное переключение
      цветов» для работы схемы.`,
      image: "",
      code: ``
  }
},
ticket_17: {
  one: {
    title: `Логический элемент «8 ИЛИ». Графическое обозначение, правило для логического элемента.`,
    text1: "",
    image1: "",
    text2: "",
    image2: "",
  },
  two: {
      title: `Сумматор. Графическое обозначение, таблица истинности.
      `,
      text1: "",
      image1: "",
      text2: "",
      image2: "",
  },
  third: {
      title: `В онлайн-программе Tinkercad — собрать схему с использованием Arduino – UNO, одного
      трех цветного (RGB) светодиода. Написать программный код «Переключение цветов:
      красный, оранжевый, желтый, зеленый, голубой, синий, фиолетовый» для работы схемы.`,
      image: "",
      code: ``
  }
},
ticket_18: {
  one: {
    title: `Логический элемент «2 И-НЕ». Графическое обозначение, таблица истинности.
    `,
    text1: "",
    image1: "",
    text2: "",
    image2: "",
  },
  two: {
      title: `Арифметико логическое устройство, сколько и каких выполняет операций?`,
      text1: "",
      image1: "",
      text2: "",
      image2: "",
  },
  third: {
      title: `В онлайн-программе Tinkercad — собрать схему с использованием Arduino – UNO, трех
      резисторов переменного сопротивления, одного трех цветного (RGB) светодиода. Написать
      программный код «При вращении ручек резисторов переменного сопротивления, изменяются
      яркости свечения светодиодов» для работы схемы.
      `,
      image: "",
      code: ``
  }
},
ticket_19: {
  one: {
    title: `Логический элемент «3 И-НЕ». Графическое обозначение, таблица истинности`,
    text1: "",
    image1: "",
    text2: "",
    image2: "",
  },
  two: {
      title: `Мультиплексор на 5 входов данных. Графическое обозначение, таблица истинности.
      `,
      text1: "",
      image1: "",
      text2: "",
      image2: "",
  },
  third: {
      title: `В онлайн-программе Tinkercad — собрать схему с использованием Arduino – UNO, трех
      тактовых кнопок, одного трех цветного (RGB) светодиода. Написать программный код «При
      нажатии на одну из трех кнопок, светодиод включается одним из трех цветов» для работы
      схемы.`,
      image: "",
      code: ``
  }
},
ticket_20: {
  one: {
    title: `Логический элемент «4 И-НЕ». Графическое обозначение, правило для логического элемента`,
    text1: "",
    image1: "",
    text2: "",
    image2: "",
  },
  two: {
      title: `Последовательный периферийный интерфейс – SPI.`,
      text1: "",
      image1: "",
      text2: "",
      image2: "",
  },
  third: {
      title: `В онлайн-программе Tinkercad — собрать схему с использованием Arduino – UNO, одного
      трех цветного (RGB) светодиода. Написать программный код «Плавное переключение
      цветов» для работы схемы.`,
      image: "",
      code: ``
  }
},
ticket_21: {
  one: {
    title: `Логический элемент «5 И-НЕ». Графическое обозначение, правило для логического элемента.`,
    text1: "",
    image1: "",
    text2: "",
    image2: "",
  },
  two: {
      title: `Мультиплексор на 7 входов данных. Графическое обозначение, таблица истинности.`,
      text1: "",
      image1: "",
      text2: "",
      image2: "",
  },
  third: {
      title: `В онлайн-программе Tinkercad — собрать схему с использованием Arduino – UNO, одной
      тактовой кнопки и светодиода. Написать программный код для работы схемы. При нажатии
      кнопки, светодиод выключается.`,
      image: "",
      code: ``
  }
},
ticket_22: {
  one: {
    title: `Логический элемент «6 И-НЕ». Графическое обозначение, правило для логического элемента.`,
    text1: "",
    image1: "",
    text2: "",
    image2: "",
  },
  two: {
      title: `Мультиплексор на 4 входа данных. Графическое обозначение, таблица истинности.
      `,
      text1: "",
      image1: "",
      text2: "",
      image2: "",
  },
  third: {
      title: `В онлайн-программе Tinkercad — собрать схему с использованием Arduino – UNO, одной
      тактовой кнопки и светодиода. Написать программный код для работы схемы. При нажатии
      кнопки, светодиод включается, при следующем нажатии кнопки светодиод выключается.`,
      image: "",
      code: ``
  }
},
ticket_23: {
  one: {
    title: `Логический элемент «7 И-НЕ». Графическое обозначение, правило для логического элемента.`,
    text1: "",
    image1: "",
    text2: "",
    image2: "",
  },
  two: {
      title: `Универсальный синхронный последовательный приемопередатчик.`,
      text1: "",
      image1: "",
      text2: "",
      image2: "",
  },
  third: {
      title: `В онлайн-программе Tinkercad — собрать схему с использованием Arduino – UNO,
      фоторезистора и светодиода. Написать программный код для работы схемы. При затемнении
      фоторезистора, светодиод включается.`,
      image: "",
      code: ``
  }
},
ticket_24: {
  one: {
    title: `Логический элемент «8 И-НЕ». Графическое обозначение, правило для логического элемента.`,
    text1: "",
    image1: "",
    text2: "",
    image2: "",
  },
  two: {
      title: `Мультиплексор на 2 входа данных. Графическое обозначение, таблица истинности.`,
      text1: "",
      image1: "",
      text2: "",
      image2: "",
  },
  third: {
      title: `В онлайн-программе Tinkercad — собрать схему с использованием Arduino – UNO, трех
      тактовых кнопок, одного трех цветного (RGB) светодиода. Написать программный код «При
      нажатии на одну из трех кнопок, светодиод включается одним из трех цветов» для работы
      схемы.`,
      image: "",
      code: ``
  }
},
ticket_25: {
  one: {
    title: `Логический элемент «2 ИЛИ-НЕ». Графическое обозначение, таблица истинности.
    `,
    text1: "",
    image1: "",
    text2: "",
    image2: "",
  },
  two: {
      title: `Типовая микропроцессорная система. Описание, схема.`,
      text1: "",
      image1: "",
      text2: "",
      image2: "",
  },
  third: {
      title: `В онлайн-программе Tinkercad — собрать схему с использованием Arduino – UNO, трех
      резисторов переменного сопротивления, одного трех цветного (RGB) светодиода. Написать
      программный код «При вращении ручек резисторов переменного сопротивления, изменяются
      яркости свечения светодиодов.» для работы схемы.
      `,
      image: "",
      code: ``
  }
},
ticket_26: {
  one: {
    title: `Логический элемент «3 ИЛИ-НЕ». Графическое обозначение, таблица истинности.`,
    text1: "",
    image1: "",
    text2: "",
    image2: "",
  },
  two: {
      title: `Универсальный асинхронный последовательный приемопередатчик — УАПП - UART.`,
      text1: "",
      image1: "",
      text2: "",
      image2: "",
  },
  third: {
      title: `В онлайн-программе Tinkercad — собрать схему с использованием Arduino – UNO,
      фоторезистора и светодиода. Написать программный код для работы схемы. При затемнении
      фоторезистора, светодиод выключается.`,
      image: "",
      code: ``
  }
},
ticket_27: {
  one: {
    title: `Логический элемент «4 ИЛИ-НЕ». Графическое обозначение, правило для логического
    элемента.
    `,
    text1: "",
    image1: "",
    text2: "",
    image2: "",
  },
  two: {
      title: `Двухпроводной последовательный интерфейс - TWI.`,
      text1: "",
      image1: "",
      text2: "",
      image2: "",
  },
  third: {
      title: `В онлайн-программе Tinkercad — собрать схему с использованием Arduino – UNO, трех
      светодиодов. Написать программный код «Последовательное включение одного светодиода
      «Бегущий огонь»» для работы схемы.
      `,
      image: "",
      code: ``
  }
},
ticket_28: {
  one: {
    title: `Логический элемент «5 ИЛИ-НЕ». Графическое обозначение, правило для логического
    элемента.
    `,
    text1: "",
    image1: "",
    text2: "",
    image2: "",
  },
  two: {
      title: `Демультиплексор на 4 выхода данных. Графическое обозначение, таблица истинности.`,
      text1: "",
      image1: "",
      text2: "",
      image2: "",
  },
  third: {
      title: `В онлайн-программе Tinkercad — собрать схему с использованием Arduino – UNO, резистора
      переменного сопротивления и светодиода. Написать программный код для работы схемы.
      При вращении ручки резистора переменного сопротивления, изменяется яркость свечения
      светодиода.
      `,
      image: "",
      code: ``
  }
},
ticket_29: {
  one: {
    title: `Логический элемент «6 ИЛИ-НЕ». Графическое обозначение, правило для логического
    элемента.`,
    text1: "",
    image1: "",
    text2: "",
    image2: "",
  },
  two: {
      title: `Последовательная шина - I2C.`,
      text1: "",
      image1: "",
      text2: "",
      image2: "",
  },
  third: {
      title: `В онлайн-программе Tinkercad — собрать схему с использованием Arduino – UNO, одного
      трех цветного (RGB) светодиода. Написать программный код «Переключение цветов:
      красный, оранжевый, желтый, зеленый, голубой, синий, фиолетовый» для работы схемы.`,
      image: "",
      code: ``
  }
},
ticket_30: {
  one: {
    title: `Логический элемент «7 ИЛИ-НЕ». Графическое обозначение, правило для логического
    элемента.
    `,
    text1: "",
    image1: "",
    text2: "",
    image2: "",
  },
  two: {
      title: `Опишите транзисторно-транзисторная логику — ТТЛ - TTL.
      `,
      text1: "",
      image1: "",
      text2: "",
      image2: "",
  },
  third: {
      title: `В онлайн-программе Tinkercad — собрать схему с использованием Arduino – UNO, одной
      тактовой кнопки и светодиода. Написать программный код для работы схемы. При нажатии
      кнопки, светодиод включается.`,
      image: "",
      code: ``
  }
}



};
