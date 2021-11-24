int pinoSensor = 7;

void setup() {
  pinMode (pinoSensor, INPUT);
  Serial.begin(9600);  
}

void loop() {
  if(digitalRead(pinoSensor) == LOW) {
    int valor = 
    Serial.println(valor);
  }
  else {
    Serial.println(0);
  }
  delay(1000);
}
