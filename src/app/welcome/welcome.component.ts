import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class Welcome implements OnInit {
  articles: any[];
  test;

  constructor() {
    this.test=['123', '234']
    this.articles = [{
      title: 'Physical Benefits of Singing',
      subTitle: 'Singing strengthens the immune system',
      paragraphs: ['According to research conducted at the University of Frankfurt, singing boosts the immune system. The study included testing profesional choir members’ blood before and after an hour-long rehearsal singing Mozart’s “Requiem”. The researchers noticed that in most cases, the amount of proteins in the immune system that function as antibodies, known as Immunoglobulin A, were significantly higher immediately after the rehearsal. The same increases were not observed after the choir members passively listened to music.']
    },
    {
      title: 'Physical Benefits of Singing',
      subTitle: 'Singing is a workout',
      paragraphs: ['For the elderly, disabled, and injured, singing can be an excellent form of exercise. Even if you’re healthy, your lungs will get a workout as you employ proper singing techniques and vocal projections. Other related health benefits of singing include a stronger diaphragm and stimulated overall circulation. Since you pull in a greater amount of oxygen while singing than when doing many other types of exercise, some even believe that singing can increase your aerobic capacity and stamina.']
    },
    {
      title: 'Physical Benefits of Singing',
      subTitle: 'Singing improves your posture',
      paragraphs: ['Standing up straight is part of correct technique as you’re singing, so with time, good posture will become a habit! As your chest cavity expands and your shoulders and back align, you’re improving your posture overall.']
    },
    {
      title: 'Physical Benefits of Singing',
      subTitle: 'Singing helps with sleep',
      paragraphs: ['According to a health article in Daily Mail Online, experts believe singing can help strengthen throat and palate muscles, which helps stop snoring and sleep apnea. If you’re familiar with these ailments, you know how difficult it can be to get a good night’s sleep!']
    },
    {
      title: 'Psychological & Emotional Benefits of Singing',
      subTitle: 'Singing is a natural anti-depressant',
      paragraphs: ['Singing is known to release endorphins, the feel-good brain chemical that makes you feel uplifted and happy. In addition, scientists have identified a tiny organ in the ear called the sacculus, which responds to the frequencies created by singing. The response creates an immediate sense of pleasure, regardless of what the singing sounds like. Not only that, but singing can simply take your mind off the day’s troubles to boost your mood.']
    },
    {
      title: 'Psychological & Emotional Benefits of Singing',
      subTitle: 'Singing lowers stress levels',
      paragraphs: ['Making music in any form is relaxing. Singing releases stored muscle tension and decreases the levels of a stress hormone called cortisol in your blood stream.']
    },
    {
      title: 'Psychological & Emotional Benefits of Singing',
      subTitle: 'Singing improves mental alertness',
      paragraphs: ['Improved blood circulation and an oxygenated blood stream allow more oxygen to reach the brain. This improves mental alertness, concentration, and memory. The Alzheimer’s Society has even established a “Singing for the Brain” service to help people with dementia and Alzheimer’s maintain their memories.']
    },
    {
      title: 'Social Benefits of Singing',
      subTitle: 'Singing can widen your circle of friends',
      paragraphs: ['Whether you’re in a choir or simply enjoy singing karaoke with your friends, one of the unexpected health benefits of singing is that it can improve your social life. The bonds you form singing with others can be profound, since there’s a level of intimacy naturally involved.']
    },
    {
      title: 'Social Benefits of Singing',
      subTitle: 'Singing boosts your confidence',
      paragraphs: ['Stage fright is a common feeling for new singers. However, performing well and receiving praise from your friends and family may be the key to eventually overcoming your fears and boosting your self-confidence. With time, you may even find it easier to present any type of material in front of a group with poise and good presentation skills.']
    },
    {
      title: 'Social Benefits of Singing',
      subTitle: 'Singing broadens communication skills',
      paragraphs: ['According to an article in The Guardian, singing to babies helps prepare their brains for language. Music is just as important as teaching reading and writing at a young age to prevent language problems later in life. If you enjoy writing your own lyrics, honing this talent can improve your ability to communicate in different ways!']
    },
    {
      title: 'Social Benefits of Singing',
      subTitle: 'Singing increases your ability to appreciate other singers',
      paragraphs: ['Sometimes, you don’t realize how difficult something is until you try it yourself. As you grow from an amateur to an intermediate student and beyond, you’ll be looking to the masters for inspiration. You might even find a new style of music to appreciate that you wouldn’t normally listen to!',
      'The delights of singing go beyond merely enjoying the beauty of your own vocal talent. All of these health benefits of singing may make you want to join a choir or start taking voice lessons right away! If so, don’t hesitate to get started – have fun with it, and do you what you enjoy!']
    }]
  }

  ngOnInit() {
  }

}
