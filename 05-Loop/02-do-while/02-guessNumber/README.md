ให้เขียนเกมส์ทายตัวเลขสำหรับผู้เล่นสองคน โดยมีเงื่อนไขดังนี้

- ให้ใช้คำสั่ง prompt เพื่อให้ผู้เล่นคนแรกพิมพ์เลข ที่อยู่ระหว่าง 1 ถึง 99 โดยไม่ให้ผู้เล่นคนที่สองรู้ว่าตัวเลขเป็นอะไร
- ให้ใช้คำสั่ง prompt เพื่อให้ผู้เล่นคนที่สองทายเลข จนกว่าจะถูก
- ถ้าไม่ถูก จะต้องบอกด้วยว่าเลขที่ผู้เล่นคนที่สองพิมพ์เข้ามา มากกว่า หรือ น้อยกว่าคำตอบนั้น
- หากพิมพ์ถูกให้แสดงคำว่าถูกต้อง และให้แสดงจำนวนครั้งที่ทาย


```js
/*
For USER 1 
    GET number 
    IF  in range 1-99
        GO TO user 2
    ELSE
        PRINT : Invalid Range
        EXIT

For USER 1
    GET number 
    IF  out  range 1-99
        PRINT : Invalid Range
        EXIT
    ELSE
        GO TO user 2
*/
```

```js
/*
FOR USER 2 

WHILE guess !== anser
    GET guess from USER 2
    ADD count 1
    IF guess === answer 
        PRINT correct 
        PRINT count
    ELSE IF guess < answer
        PRINT less than 
    ELSE IF guess > answer
        PRINT more than 
    **ELSE**
*/
```




