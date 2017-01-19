//note: remember to add var name of new stem list into the variable allStemList in the bottom

/* use array to store all the stem lists in this js file
*/
var stemList_1 = [
		['ante', 'before', ' *antedate  anteceedent  antebellum  anterior  ante meridien  antepenult'],
		['anti', 'against', ' *anti-aircraft  antibody  anticlimax  anticline  antitoxin  antithesis'],
		['bi', 'two', ' *bilateral  bicycle  bimothy  biped  bibpolar  binocular  bicuspid'],
		['circum', 'around', ' *circumnavigate  circumspect  circumvent  circumlocution  circus'],
		['com', 'together', ' *combination  comfort  commensurate  common  complete  combo'],
		['con', 'together', ' *contract  confidence  confine  confederate  conjunction  contact'],
		['de', 'down', ' *desposit  descent  despicable  denounce  deduct  demolish  decreipt  deplete'],
		['dis', 'away', ' *distract  distort  dispute  dissonant  disperse  dismiss  dissuade  disprove'],
		['equi', 'equal', ' *equitable  equilateral  equivocate  equinox  equation  equilibrium'],
		['extra', 'beyond', ' *extraterrestrial  extraordinary  extravagant  extrovert  extramural'],
		['inter', 'between', ' *international  interdepartmental  interstellar  interject  interlude'],
		['intra', 'within', ' *intracellular  intravenous  intracranial  intrastate  intrauterine'],
		['intro', 'into', ' *introduce  introspective  introvert  introject  introrse  intromission'],
		['mal', 'bad', ' *malevolent  malcontent  vmalicious  malign  malady  malapropism  malonym'],
		['mis', 'bad', ' *misfit  mistake  misfortune  misfire  misery  miser  misdeed  misguided'],
		['non', 'not', ' *nonstop  nonprofit  none  noncomforty  nonplussed  nonchalant'],
		['post', 'after', ' *postgraduate  posthumous   postscript  posterity  posterior  postlude'],
		['pre', 'before', ' *prelude  preposition  premonitionpremature  predict  predecessor'],
		['semi', 'half', ' *semitone  semiaquatic  semicircle  semiweekly  semiannual  semiformal'],
		['sub', 'under', ' *subterranean  subtract  subordinate m submarine  subterfudge  substanial'],
		['super', 'over', ' *supervise  superb  superior  superfluos  supercilious  supernatural'],
		['syn', 'together', ' *synthetic  synchronize  syndrome  synonym  synopsis syntax'],
		['sym', 'together', ' *sympathy  symbiosis  symbol  symmetry  symphony  symposium'],
		['tri', 'three', ' *tricycle  triangle  triceps  triad  trichotomy  triceratops  trivia  trialogue'],
		['un', 'not', ' *unfit  unequal  undone  unequivocal  unearned  unconventional  untenable']
];

var stemList_3 = [
		['homo', 'same', ' *homogenize  homonym  homophone  homologuos  homozygous'],
		['spec', 'look', ' *spectacles  specter  speck  specious  spectrum  respect  inspect  prospectus'],
		['duct', 'lead', ' *conduct  ductile  induct  product  reduction  deduction  reproduction'],
		['fer', 'carry', ' *transfer  infer  refer  defer  ferry   conifer  Lucifer  aquifer  auriferous'],
		['pend', 'hang', ' *pending  pendulum  pendant  impending  depend  penduluos  suspend'],
		['micro', 'small', ' * micron  microscope  microwave   microphone  microcosm  microbiotic'],
		['hydro', 'water', ' *hydroplane  hydroponics  dehydrate  hydrant  hydrogen  hydrophobia'],
		['photo', 'light', ' *photogragh  photometer  photon  photogenic  photosynthesis'],
		['pan', 'all', ' *panorama  panoply  pandemic  pantheism  pantheon  panamerican'],
		['penta', 'five', ' *pentagram  pentagon  pentameter  pentatholon  pentarchy  penthedron'],
		['tele', 'far', ' *telescope  telephone  telekenesis  telepathy  teleology  telesthesia  telex'],
		['vid', 'look', ' *video  invdious  Montevideo  evidence  provide  videogenic  vide  vidlicet'],
		['omni', 'all', ' * omnifarious  omnipotent  omnivourous  omniscient  omnibus  omnipresent'],
		['ex', 'out', ' * exit  except  excise  exulpate  eludicate  exorbitant  eccentric  enumerate'],
		['poly', 'many', ' *polyphony  polygyny  polygamy  allopolyploidy  polyvalent  polychrome'],
		['re', 'again', ' *return  review  retouch  reiterate  retail  revive  regenerate  regurgitate'],
		['hypo', 'under', ' *hypodermic  hypocrite  hypotenuse  hypothermia  hypothesis'],
		['pseudo', 'false', ' *pseudonym  pseudopod  pseudomorphic  pseudoscience  pseudoevent'],
		['neuro', 'nerve', ' *neuron  neurosurgeon  neurosis  neurology  neuralgia  neurotomy'],
		['tony', 'cut', ' *tonsillectomy  appendectomy  neurotomy  dichotomy  anatomy  lobotomy'],
		['hema', 'blood', ' *hematic  hematite  hematology  hematoma  hemal  hematogenesis'],
		['proto', 'first', ' *protoplasm  prototype  Protozoa  proton  protohuman  protomorphic'],
		['phon', 'sound', ' *symphony  telephone  phonetic  phonograph euphony cacophony'],
		['mono', 'one', ' *monottonous  monomaniiiia  monocular  monagamous  monolithic  monotone'],
		['viv', 'life', ' *vivid  vivisection  vivacious  convivial  [bon vivant]  viva  viviparous revive']
	];

var stemList_4 = [
		['morph', 'shape', ' *amorphous  morphology  polymorphously  mesomorph  protomorphic'],
		['vest', 'clothes', ' *vestry  vestment  vestibule  vest  investiture  devest  divestiture'],
		['bene', 'good', ' *benefit  benevolent  beneficial  benediction  benefactor  benign'],
		['pond', 'weight', ' *ponderoud  ponder  preponderant  pound  imponderable  compound'],
		['corp', 'body', ' *corpulent  corporation  corporeal  corporal  corpse  corpuscle'],
		['dorm', 'sleep', ' *dormitory  dormant  dormer  dormancy  dormitive  dormient'],
		['pater', 'father', ' *paternalistic  patronize  paternity  patriarch  expatriate  paterfamilias'],
		['nov', 'new', ' *novel  nova  novice  novitiate  Nova Scotia  innovation  rennovate'],
		['punct', 'point', ' *punctuate  punctilious  puncture  punctual  acupuncture  contrapunctal'],
		['ject', 'throw', ' *eject  reject  conjecture  dejected  inject  subject  projection  interject'],
		['tion', 'act or state', ' *completion  reaction  devastation  production  creation  transition'],
		['loco', 'place', ' *locomotive  location  local  locus  relocate  dislocate  localize  locomotor'],
		['dox', 'opinion', ' *orthodox  heterodox  doxology  indoctrinate paradox'],
		['amphi', 'both', ' *amphibious  amphitheater  amphibian  amphigory  amphibolous'],
		['magn', 'great', ' *Magn Carta  magnanimous  magnate  magnificent  magnum opus'],
		['eu', 'good', ' *Eucharist  euphony  eulogy  euphemism  Europe  eugenics  euglena'],
		['endo', 'within', ' *endoplasm  endocrine  endogamous  endoskeleton  endothermic'],
		['phobia', 'fear', ' *clausphobia  acrophobia  xenophobia  agoraphobia hydrphobia'],
		['ortho', 'straight', ' *orthopedics  orthodontist  orthodox  orthography  orthogonal'],
		['put', 'think', ' *reputation  putative  impute  dispute  computer  disreputable'],
		['ver', 'true', ' *verify  veracity  veritable  verdict  versimiliude  aver  cinema  verite'],
		['matri', 'mother', ' *matricide  matron  matriarch  matrimony  metropolis  matrilineal'],
		['mega', 'large', ' *megalith  megaphone  megalomania  megalopolis  megahertz'],
		['pop', 'people', ' *popular  populist  populate  population  popularize  populous'],
		['sangui', 'blood', ' *sanguinary  sanguine  consanguinity  sangfroid  sangria']
];

var stemList_5 = [
		['vita', 'life', ' *vitamin  *vitality  *vital  *revitalize  *viable  *vitalism  *devitalize'],
		['demo', 'people', ' *democracy  demography  undemocratic  democratize'],
		['stereo', 'solid', ' *stereoscope  stereophonic  stereotype  stereopticon  stereotropism'],
		['ism', 'doctrine', ' *Marxism  capitalism  Imaginism  Cubism nihilism  pluralism  tribalism'],
		['cogn', 'know', ' *recognize  cognizant  incognito  cognoscenti  cognomen  precognition'],
		['sur', 'over', ' *surplus  surpass  surcharge  surface  surfeit  surmount  surname  surtax'],
		['alter', 'other', ' *alternator  alteration  alter ego   alternative  altruism  altercation'],
		['astr', 'star', ' *astronomy  astrology  asteroid  disaster  asterdisk  astrophysics  astrolabe'],
		['dyna', 'power', ' *dynamic  dynamo  dynamite  dynasty  dynamometer  dinosaur'],
		['chron', 'time', ' *chronometer  chronological  synchronize  chronic  anachronism'],
		['hyper', 'over', ' *hyperactive  hyperventilate  hyperbole  hyperacidity  hypertension'],
		['luna', 'moon', ' *lunar  lunatic  lunate  luna moth  lunnete  sublunar lunular'],
		['octa', 'eight', ' *octameter  octageneration  octagon  octarchy  octave  octopus octahedron'],
		['gyro', 'turn', ' *gyration  gyroscope  gyre  gyrate  spirogyra  gyromagnetic  gyrocompass'],
		['contra', 'against', ' *contradict  contrary  contrast  contrapuntal  contraband  contravene'],
		['geo', 'earth', ' *geography  geothermal  geology  geophisycs  geometry  geosynchronous'],
		['helio', 'sun', ' *helios  heliotropic  heliocentric  heliograph  perihelion  aphelion'],
		['thermo', 'heat', ' *thermostat  thermos  thermotropic  thermonuclear  thermocouple'],
		['tetra', 'four', ' *tetrameter tetrahedron  tetroxide  tetragon  tetrachloride  tetracycline'],
		['meter', 'measure', ' *thermometer  millimeter  octameter  hydrometer  odometer'],
		['scope', 'look', ' *telescope  microscope  periscope  radarscope  horoscope  electroscope'],
		['son', 'sound', ' *sonar  unision  sonorous  song  sonnet  dissonance n resonant  supersonic'],
		['dec', 'ten', ' *decade  decaliter  decimal  decagon  decathlon  decimate  duodecahedron'],
		['stell', 'star', ' *interstellar  stelliform  stellar  constellation  stellate  stellify'],
		['amat', 'love', ' *amatory  amateur  amoros  amiable  amigo  amour-propre  amity']
];

var stemList_6 = [
		['germ', 'vital or related', ' *germane  *germinate  *germicide  *germinal  *germ'],
		['greg', 'group', ' *gregarious  *egregious  *gregariously  *segregate  *congregate  *aggregate'],
		['mar', 'sea', ' *marine  *marina  *ultramarine  *martime  *mariner  *marinate  *submarine'],
		['prim', 'first', ' *prime  *primary  *primate  *primogeniture  *primeval  *prima  *donna  *primo'],
		['pyro', 'fire', ' *pyre  *pyromania  *pyrotechnic  *pyrogenic  *pyrophobia  *pyrometer'],
		['clam', 'cry out', ' *clamorous  *exclamation  *clamor  *exclamatory  *clamant  *declaim'],
		['plu', 'more', ' *plural  *plurality  *plus  *pluralize  *pluriaxial  *pluralism  *nonplussed'],
		['tang', 'touch', ' *tangible  *tangent  *tangle  *tangential  *cotangent  *intangible'],
		['string', 'bind', ' *stringent  *string  *stringy  *astringent  *stringer'],
		['liber','free', ' *liberate  *liberty  *liberal  *libertine  *deliberate  *libertarian'],
		['junct','join', ' *junction  *conjunction  *juncture  *disjunct  *injunction  *adjunct'],
		['clud', 'close', ' *exclude  *include  *preclude  *exclusive  *occlude  *conclude  *cloister'],
		['se', 'apart', ' *secede  *secret  *sedition  *seduce  *segregate  *select  *sedulous  *seperate'],
		['trib', 'pay', ' *tribute  *tributary  *retribution  *contribution  *attribute  *diatribe  *distribute'],
		['dign', 'worthy', ' *dignify  *dignity  *condign  *dignitary  *undignified  *indignation'],
		['luc', 'light', ' *lucid  *translucent  *lucidity  *Lucifer  *elucidate  *lucent  *lucubrate'],
		['rupt', 'break', ' *erupt  *disrupt  *rupture  *corrupt  *abrupt  *uncorruptible'],
		['grat', 'pleasing', ' *gratifying  *gratitude  *ingrate  *grateful  *gratuitous  *ingratitate'],
		['medi', 'middle', ' *median  *meditate  *medium  *mediocre  *mediterranean *in medias res'],
		['soph', 'wisdom', ' *sophomore  *sophisticated  *sophist  *philosophy  *pansophy  *theosophy'],
		['curr', 'run', ' *current  *undercurrent  *currently  *recurrent  *currency  *incur'],
		['tempor', 'time', ' *temporal  *contemporary  *temporize  *temporarily  *tempus fugit'],
		['migr', 'wander', ' *migrate  *transmigration  *migrant  *migratory  *emigrant  *immigrant'],
		['trans', 'across', ' *transfer  *translate  *transmit  *transfusion  *translucent  *transcend'],
		['gamy', 'marriage', ' *monogamy  *polygamy  *bigamy  *gamete  *autogamous  *exogamy']
];

var stemList_7 = [
		['numer', 'number', ' *enumerate  numeral  numerous  supernumeraries  numerology'],
		['fort', 'strong', ' *fortitude  fort  fortify  fortification  comfort  forte  fortissimo  pianoforte'],
		['osteo', 'bone', ' *osteopath  osteology  osteopathy  osteoblast  osteocyte  osteotomy'],
		['ornith', 'bird', ' *ornithology  ornithologist  ornithopter   ornithomancy'],
		['polis', 'city', '  *metropolis  megalopolis  police  polite  policy acropolis necropolis'],
		['fus', 'pour', ' *transfusion  infusion  infusion  fusillade  infuse  confusion'],
		['ego', 'I', ' *egomaniac egocentric  egotstical   egotist  egotize  egosim  alter ego'],
		['spir', 'breathe', ' *inspire  respiration  perspiration  expire  spirit  aspire  conspire'],
		['dia', 'across', ' *diagonal  diameter  dialouge  dialect  diatribe  diaphanous  dialectic'],
		['acr', 'sharp', ' *acrimonious  acerbity  acrid  acridine  acrimony  acerate'],
		['acro', 'high', ' *acrobat  acronym  acropolis  acrophobia  acromegaly  acrocarpous'],
		['culp', 'blame', ' *culprit  culpable  exculpate  inculpate  exculpatory'],
		['derm', 'skin', ' *dermatologist  dermatitis  pachyderm  hypodermic  ectoderm  endoderm'],
		['zo', 'animal', ' *zoo  protozoa  zoophilous  zooplankton  zoophagous  Mesozoic  zodiac'],
		['per', 'through', ' *perception  perforation  percolate  perambulate  peregrination'],
		['pac', 'peace', ' *pacify  pacfic  pacifist  pacifier  pacifism  Pax Romana  pacification'],
		['brev', 'short', ' *brevity  abbreviation  breve  breviary  brevirostrate  brief'],
		['necro', 'death', ' *necropolis  necromancer  necrophobia  necrotic  necrobiosis'],
		['urb', 'city', ' *urban  urbane  suburbs  urbanite  urbanologist  urbanism'],
		['pugn', 'fight', ' *pugnacious  reoungnant  pugilist  impugn  oppugn  inexpugnable'],
		['ecto', 'outer', ' *ectoderm  ectozoa  ectomorph  ectothermic  ectoplasm  ectoparasite'],
		['plasto', 'molded', ' *plastic  dermoplasty  rhinoplasty  plaster  plasticity  plastid'],
		['agog', 'leader', ' *dermagogue  pedagogue  synagogue  agogics  pedagogy  mystagogue'],
		['cle', 'small', ' *molecule  corpuscule  follicle  minuscule  ventricle  particle  vessicle'],
		['il', 'not', '  *illegal  illiterate  illict  illogical  illegible  illiberal']
];

var stemList_8 = [
		['sed', 'sit', ' *sedentary  sediment  sedan  sedative  sedate  supersede  assiduos  insidious'],
		['leg', 'read', ' *egible  legend  illegible  legendary  legibility  alleged'],
		['anim', 'mind', ' *equanimiy  animal  animated  animosity  magnanimous  animadversion'],
		['tort', 'twist', ' *contorted  torture  tortuous,  retort  distort  torturous  tort  tortilla'],
		['nym', 'name', ' *homonym  acronym  pseudonym  anonymous  patronymic  anomaly'],
		['sanct', 'holy', ' *sanctity  sanctimonious  sacrosanct  sanctuary  unsanctioned  sanctify'],
		['meta', 'change', ' *metamorphosis  metaphor  metaphysics  metastasize  metabolism'],
		['petr', 'rock', ' *peterify  petroleum  petrology  petroglyph  petrophilous  petrochemical'],
		['mir', 'wonder', ' *miracle  mirage  mirror  mirabile dictu  admire  mirabilia  miracle play'],
		['man', 'hand', ' *manual  manicure  manipulate  manacles  amanuensis  legerdemain'],
		['rect', 'right', ' *correct  rectitude  direct  rectilinear  rectangle  rectify  rector  erect'],
		['volv', 'roll', ' *revolve  onvolved  devolve  convoluted  volvox  revolution  volvulus'],
		['demi', 'half', ' *demigod  demitasse  demisemiquaver  demiurge  demimonde  demirep'],
		['retro', 'backward', ' *retroactive  retrofire  retrogress  retrospection  retrofit  retorse'],
		['sens', 'feel', ' *sense  sensitive  sensation  sensory  extrasensory  insensate'],
		['fy', 'make', ' *fortify  rectify  horrify  solidify  reify  transmorgrify  sanctify  pacify'],
		['ocul', 'eye', ' *binocular  monocular  ocular  oculist  oculomoter nerve  oculometer'],
		['cur', 'care for', ' *cure  curator  curative  cure-all  sinecure  secure  curate'],
		['ultra', 'beyond', ' *ltramarine  ultraconservative  ultraviolet  ultramundane'],
		['oid', 'appearance', ' *android (droid!)  anthropid  asteroid  adenoid  xyloid  haploid'],
		['gest', 'carry', ' *gestaion  digest  ingest  congestion  gesticulate  gesture'],
		['apt', 'fit', ' *adapt  aptitude  maladapted  adaptationaptly  aptness'],
		['tact', 'touch', ' *tactile  contact  tactics  tactcian  intact'],
		['voc', 'voice', ' *vociferously  vocal  sotto voce  invoaction  vocabulary  convocation'],
		['rid', 'laugh', ' *ridcule  deride  dersion  risibility  ridiculous']
];

//put all stem lists in a variable
var allStemList = [stemList_1, stemList_3, stemList_4, stemList_5, stemList_6, stemList_7, stemList_8];
