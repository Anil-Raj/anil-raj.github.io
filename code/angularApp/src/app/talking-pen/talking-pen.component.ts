import { Component, OnInit } from '@angular/core';
const data = [
  { name: 'A', image: 'assets/alphabets/images/a.png', audio: 'assets/alphabets/a(1).mp3' },
  { name: 'B', image: 'assets/alphabets/images/b.png', audio: 'assets/alphabets/b(1).mp3' },
  { name: 'C', image: 'assets/alphabets/images/c.png',audio: 'assets/alphabets/c(1).mp3' },
  { name: 'D', image: 'assets/alphabets/images/d.png',audio: 'assets/alphabets/d(1).mp3' },
  { name: 'E', image: 'assets/alphabets/images/e.png',audio: 'assets/alphabets/e(1).mp3' },
  { name: 'F', image: 'assets/alphabets/images/f.png',audio: 'assets/alphabets/f(1).mp3' },
  { name: 'G',image: 'assets/alphabets/images/g.png', audio: 'assets/alphabets/g(1).mp3' },
  { name: 'H', image: 'assets/alphabets/images/h.png',audio: 'assets/alphabets/h(1).mp3' },
  { name: 'I', image: 'assets/alphabets/images/i.png',audio: 'assets/alphabets/i(1).mp3' },
  { name: 'J',image: 'assets/alphabets/images/j.png', audio: 'assets/alphabets/j(1).mp3' },
  { name: 'K',image: 'assets/alphabets/images/k.png', audio: 'assets/alphabets/k(1).mp3' },
  { name: 'L',image: 'assets/alphabets/images/l.png', audio: 'assets/alphabets/l(1).mp3' },
  { name: 'M',image: 'assets/alphabets/images/m.png', audio: 'assets/alphabets/m(1).mp3' },
  { name: 'N', image: 'assets/alphabets/images/n.png',audio: 'assets/alphabets/n(1).mp3' },
  { name: 'O', image: 'assets/alphabets/images/o.png',audio: 'assets/alphabets/o(1).mp3' },
  { name: 'P', image: 'assets/alphabets/images/p.png',audio: 'assets/alphabets/p(1).mp3' },
  { name: 'Q', image: 'assets/alphabets/images/q.png',audio: 'assets/alphabets/q(1).mp3' },
  { name: 'R',image: 'assets/alphabets/images/r.png', audio: 'assets/alphabets/r(1).mp3' },
  { name: 'S', image: 'assets/alphabets/images/s.png',audio: 'assets/alphabets/s(1).mp3' },
  { name: 'T', image: 'assets/alphabets/images/t.png',audio: 'assets/alphabets/t(1).mp3' },
  { name: 'U', image: 'assets/alphabets/images/u.png',audio: 'assets/alphabets/u(1).mp3' },
  { name: 'V',image: 'assets/alphabets/images/v.png', audio: 'assets/alphabets/v(1).mp3' },
  { name: 'W', image: 'assets/alphabets/images/w.png',audio: 'assets/alphabets/w(1).mp3' },
  { name: 'X', image: 'assets/alphabets/images/x.png',audio: 'assets/alphabets/x(1).mp3' },
  { name: 'Y', image: 'assets/alphabets/images/y.png',audio: 'assets/alphabets/y(1).mp3' },
  { name: 'Z', image: 'assets/alphabets/images/z.png',audio: 'assets/alphabets/z(1).mp3' },

];
@Component({
  selector: 'app-talking-pen',
  templateUrl: './talking-pen.component.html',
  styleUrls: ['./talking-pen.component.css']
})


export class TalkingPenComponent implements OnInit {
  data = data;
  constructor() { }

  ngOnInit() {
  }

  play(item) {
    const audio = new Audio(item.audio);
    audio.play();
  }

}
