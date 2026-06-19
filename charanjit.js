setCps(160/60/4)

stack(
  // 4-on-the-floor kick
  s("bd*4")
    .bank("RolandTR909")
    .gain(0.9)
    .room(0.08),

  // Snare / clap on 2 and 4
  s("~ cp ~ cp")
    .bank("RolandTR909")
    .gain(0.45)
    .room(0.18),

  // Disco hats
  s("hh*16")
    .bank("RolandTR909")
    .gain("0.18 0.10 0.15 0.10")
    .hpf(6500)
    .pan("<0.45 0.55>/8"),

  // Open hat lift
  s("~ oh ~ oh")
    .bank("RolandTR909")
    .gain(0.18)
    .hpf(5000)
    .room(0.15),

  // Acid bassline: repeating 303-ish Bhairav movement
  note(`
    <
      [c2 c3 db3 c3]*2
      [e2 e3 f3 e3]*2
      [g2 ab2 g2 e2]*2
      [db3 c3 b2 ab2]*2
    >
  `)
    .s("sawtooth")
    .legato("0.35 0.55 0.25 0.7")
    .lpf("<650 1200 850 1800>/2")
    .lpq("<12 18 10 22>/4")
    .lpenv("<3 5 2 7>/2")
    .lpa(0.005)
    .lpd("<0.06 0.11 0.04 0.14>")
    .lps(0)
    .decay(0.14)
    .sustain(0)
    .shape(0.25)
    .gain(0.55),


  // Drone / tanpura-like bed
  // note("[c3,g3,c4]*2")
  //   .s("sawtooth")
  //   .legato(1.8)
  //   .attack(0.4)
  //   .release(1.2)
  //   .lpf(900)
  //   .lpq(3)
  //   .room(0.8)
  //   .gain(0.16)
)
