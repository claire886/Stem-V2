/* use array to store all the stem lists in this js file
*/


var stemList_5 = [
	[0, 'vita', 'life', ' *vitamin  *vitality  *vital  *revitalize  *viable  *vitalism  *devitalize'],
	[0, 'demo', 'people', ' *democracy  demography  undemocratic  democratize'],
	[0, 'stereo', 'solid', ' *stereoscope  stereophonic  stereotype  stereopticon  stereotropism'],
	[0, 'ism', 'doctrine', ' *Marxism  capitalism  Imaginism  Cubism nihilism  pluralism  tribalism'],
	[0, 'cogn', 'know', ' *recognize  cognizant  incognito  cognoscenti  cognomen  precognition'],
	[0, 'sur', 'over', ' *surplus  surpass  surcharge  surface  surfeit  surmount  surname  surtax'],
	[0, 'alter', 'other', ' *alternator  alteration  alter ego   alternative  altruism  altercation'],
	[0, 'astr', 'star', ' *astronomy  astrology  asteroid  disaster  asterdisk  astrophysics  astrolabe'],
	[0, 'dyna', 'power', ' *dynamic  dynamo  dynamite  dynasty  dynamometer  dinosaur'],
	[0, 'chron', 'time', ' *chronometer  chronological  synchronize  chronic  anachronism'],
	[0, 'hyper', 'over', ' *hyperactive  hyperventilate  hyperbole  hyperacidity  hypertension'],
	[0, 'luna', 'moon', ' *lunar  lunatic  lunate  luna moth  lunnete  sublunar lunular'],
	[0, 'octa', 'eight', ' *octameter  octageneration  octagon  octarchy  octave  octopus octahedron'],
	[0, 'gyro', 'turn', ' *gyration  gyroscope  gyre  gyrate  spirogyra  gyromagnetic  gyrocompass'],
	[0, 'contra', 'against', ' *contradict  contrary  contrast  contrapuntal  contraband  contravene'],
	[0, 'geo', 'earth', ' *geography  geothermal  geology  geophisycs  geometry  geosynchronous'],
	[0, 'helio', 'sun', ' *helios  heliotropic  heliocentric  heliograph  perihelion  aphelion'],
	[0, 'thermo', 'heat', ' *thermostat  thermos  thermotropic  thermonuclear  thermocouple'],
	[0, 'tetra', 'four', ' *tetrameter tetrahedron  tetroxide  tetragon  tetrachloride  tetracycline'],
	[0, 'meter', 'measure', ' *thermometer  millimeter  octameter  hydrometer  odometer'],
	[0, 'scope', 'look', ' *telescope  microscope  periscope  radarscope  horoscope  electroscope'],
	[0, 'son', 'sound', ' *sonar  unision  sonorous  song  sonnet  dissonance n resonant  supersonic'],
	[0, 'dec', 'ten', ' *decade  decaliter  decimal  decagon  decathlon  decimate  duodecahedron'],
	[0, 'stell', 'star', ' *interstellar  stelliform  stellar  constellation  stellate  stellify'],
	[0, 'amat', 'love', ' *amatory  amateur  amoros  amiable  amigo  amour-propre  amity']
];

var stemList_6 = [
	[0, 'germ', 'vital or related', 
		' *germane  *germinate  *germicide  *germinal  *germ'],
	[0, 'greg', 'group', 
		' *gregarious  *egregious  *gregariously  *segregate  *congregate  *aggregate'],
	[0, 'mar', 'sea', 
		' *marine  *marina  *ultramarine  *martime  *mariner  *marinate  *submarine'],
	[0, 'prim', 'first', 
		' *prime  *primary  *primate  *primogeniture  *primeval  *prima  *donna  *primo'],
	[0, 'pyro', 'fire', 
		' *pyre  *pyromania  *pyrotechnic  *pyrogenic  *pyrophobia  *pyrometer'],
	[0, 'clam', 'cry out', 
		' *clamorous  *exclamation  *clamor  *exclamatory  *clamant  *declaim'],
	[0, 'plu', 'more',
		' *plural  *plurality  *plus  *pluralize  *pluriaxial  *pluralism  *nonplussed'],
	[0, 'tang', 'touch',
		'  *tangible  *tangent  *tangle  *tangential  *cotangent  *intangible'],
	[0, 'string', 'bind',
		'  *stringent  *string  *stringy  *astringent  *stringer'],
	[0, 'liber','free',
		'  *liberate  *liberty  *liberal  *libertine  *deliberate  *libertarian'],
	[0, 'junct','join',
		'  *junction  *conjunction  *juncture  *disjunct  *injunction  *adjunct'],
	[0, 'clud', 'close',
		'  *exclude  *include  *preclude  *exclusive  *occlude  *conclude  *cloister'],
	[0, 'se', 'apart',
		'  *secede  *secret  *sedition  *seduce  *segregate  *select  *sedulous  *seperate'],
	[0, 'trib', 'pay',
		'  *tribute  *tributary  *retribution  *contribution  *attribute  *diatribe  *distribute'],
	[0, 'dign', 'worthy',
		'  *dignify  *dignity  *condign  *dignitary  *undignified  *indignation'],
	[0, 'luc', 'light',
		'  *lucid  *translucent  *lucidity  *Lucifer  *elucidate  *lucent  *lucubrate'],
	[0, 'rupt', 'break',
		'  *erupt  *disrupt  *rupture  *corrupt  *abrupt  *uncorruptible'],
	[0, 'grat', 'pleasing',
		'  *gratifying  *gratitude  *ingrate  *grateful  *gratuitous  *ingratitate'],
	[0, 'medi', 'middle',
		'  *median  *meditate  *medium  *mediocre  *mediterranean *in medias res'],
	[0, 'soph', 'wisdom',
		'  *sophomore  *sophisticated  *sophist  *philosophy  *pansophy  *theosophy'],
	[0, 'curr', 'run',
		'  *current  *undercurrent  *currently  *recurrent  *currency  *incur'],
	[0, 'tempor', 'time',
		'  *temporal  *contemporary  *temporize  *temporarily  *tempus fugit'],
	[0, 'migr', 'wander',
		'  *migrate  *transmigration  *migrant  *migratory  *emigrant  *immigrant'],
	[0, 'trans', 'across',
		'  *transfer  *translate  *transmit  *transfusion  *translucent  *transcend'],
	[0, 'gamy', 'marriage',
		'  *monogamy  *polygamy  *bigamy  *gamete  *autogamous  *exogamy']		
];