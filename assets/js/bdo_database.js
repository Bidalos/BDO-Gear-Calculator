/*
* @Author: SirMrE
* @http: http://www.sirmre.com/bdo-calculator
* @Copyright: (c) 2016 Mark Eliasen
* @license: May be freely distributed under the CC BY-NC 3.0 License 
*           (https://creativecommons.org/licenses/by-nc/3.0/)
* @Date:   2016-04-07 21:40:17
* @Last Modified by:   SirMrE
* @Last Modified time: 2016-04-09 18:53:14
*/

/* Data from http://bddatabase.net */
/* jslint unused: false */

var BDOdatabase = {
    "max_gear_enhancement": 15,
    "max_acc_enhancement": 5,
    "stats": {
        "ap": {
            "title": "AP",
            "min": 0,
            "max": 0,
            "symbol": ""
        },
        "dp": {
            "title": "DP",
            "total": 0,
            "symbol": ""
        },
        "hp": {
            "title": "Health",
            "total": 0,
            "symbol": ""
        },
        "mpwpsp": {
            "title": "MP/WP/SP",
            "total": 0,
            "symbol": ""
        },
        "hprc": {
            "title": "HP recovery",
            "total": 0,
            "symbol": ""
        },
        "wprc": {
            "title": "WP recovery",
            "total": 0,
            "symbol": ""
        },
        "sprc": {
            "title": "SP recovery",
            "total": 0,
            "symbol": ""
        },
        "mpar": {
            "title": "MP Auto Recovery",
            "total": 0,
            "symbol": ""
        },
        "wpar": {
            "title": "WP Auto Recovery",
            "total": 0,
            "symbol": ""
        },
        "spar": {
            "title": "SP Auto Recovery",
            "total": 0,
            "symbol": ""
        },
        "hpar": {
            "title": "HP Auto Recovery",
            "total": 0,
            "symbol": ""
        },
        "dr": {
            "title": "Damage Reduction",
            "total": 0,
            "symbol": ""
        },
        "sr": {
            "title": "Stun Resistance",
            "total": 0,
            "symbol": "%"
        },
        "gr": {
            "title": "Grapple Resistance",
            "total": 0,
            "symbol": "%"
        },
        "kb": {
            "title": "Knowback/Floating Resistance",
            "total": 0,
            "symbol": "%"
        },
        "kd": {
            "title": "Knockdown/Bound Resistance",
            "total": 0,
            "symbol": "%"
        },
        "ar": {
            "title": "All Resistances",
            "total": 0,
            "symbol": "%"
        },
        "rta": {
            "title": "Resistance to All Status Abnormalities",
            "total": 0,
            "symbol": "%"
        },
        "as": {
            "title": "Attack Speed",
            "total": 0,
            "symbol": ""
        },
        "cs": {
            "title": "Casting Speed",
            "total": 0,
            "symbol": ""
        },
        "lk": {
            "title": "Luck",
            "total": 0,
            "symbol": ""
        },
        "ms": {
            "title": "Movement Speed",
            "total": 0,
            "symbol": ""
        },
        "chr": {
            "title": "Critical Hit Rate",
            "total": 0,
            "symbol": "%"
        },
        "acc": {
            "title": "Accuracy",
            "total": 0,
            "symbol": ""
        },
        "ev": {
            "title": "Evasion",
            "total": 0,
            "symbol": ""
        },
        "end": {
            "title": "Endurance",
            "total": 0,
            "symbol": ""
        },
        "wgt": {
            "title": "Weight Limit",
            "total": 0,
            "symbol": ""
        },
        "dmgtdh": {
            "title": "Damage To Demihumans",
            "total": 0,
            "symbol": ""
        },
        "dmgth": {
            "title": "Damage To Humans",
            "total": 0,
            "symbol": ""
        },
        "dmgaes": {
            "title": "Damage Against Every Species",
            "total": 0,
            "symbol": ""
        }
    },
    "rarity": {
        "common": "#ffffff",
        "uncommon": "#5ff369",
        "rare": "#0391c4",
        "epic": "#f6c232",
        "legendary": "#d36300"
    },
    "classes": [
        "Berserker",
        "Ranger",
        "Sorceress",
        "Tamer",
        "Valkyrie",
        "Warrior",
        "Witch",
        "Wizard"
    ],
    "set_effects": {
        "Agerian": {
            "pieces": {
                "2": {
                    "max-hp": 100
                },
                "3": {
                    "as": 2,
                    "cs": 2
                }
            },
            "combos": {}
        },
        "Hercules' Might": {
            "pieces": {
                "2": {
                    "wgt": 150
                },
                "3": {
                    "wgt": 50
                }
            },
            "combos": {}
        },
        "Luck of Fortuna": {
            "pieces": {
                "2": {
                    "lk": 2
                },
                "3": {
                    "ms": 3
                }
            },
            "combos": {}
        },
        "Strength of Heve": {
            "pieces": {
                "2": {
                    "hp": 250
                },
                "3": {
                    "hp": 50
                }
            },
            "combos": {}
        },
        "Talis": {
            "pieces": {
                "2": {
                    "ms": 1,
                    "jh": 0
                },
                "3": {
                    "ms": 2
                }
            },
            "combos": {}
        },
        "Taritas": {
            "pieces": {
                "2": {
                    "mpwpsp": 100
                },
                "3": {
                    "acc": 5
                }
            },
            "combos": {}
        },
        "Zereth": {
            "pieces": {
                "2": {
                    "end": 200
                },
                "3": {
                    "dmgaes": 5
                }
            },
            "combos": {}
        },
        "Rocaba": {
            "pieces": {
                "4": {
                    "ev": 2
                }
            },
            "combos": [
                {
                    "pieces": [
                        "gloves",
                        "helmet"
                    ],
                    "effects": {
                        "ev": 5
                    }
                },
                {
                    "pieces": [
                        "armor",
                        "shoes"
                    ],
                    "effects": {
                        "hp": 75,
                        "mpwpsp": 75
                    }
                }
            ]
        },
        "Grunil": {
            "pieces": {
                "4": {
                    "ap": 2
                }
            },
            "combos": [
                {
                    "pieces": [
                        "gloves",
                        "helmet"
                    ],
                    "effects": {
                        "ap": 5
                    }
                },
                {
                    "pieces": [
                        "armor",
                        "shoes"
                    ],
                    "effects": {
                        "hp": 150
                    }
                }
            ]
        }
    },
    "items": {
        "helmets": {
            "Agerian Helmet": {
                "set": "Agerian",
                "dp": 4,
                "rarity": "uncommon",
                "gems": 1,
                "item_effects": {
                    "sr": 2,
                    "dr": 2
                },
                "enhancement": {
                    "1": {
                        "dp": 7
                    },
                    "2": {
                        "dp": 10
                    },
                    "3": {
                        "dp": 12
                    },
                    "4": {
                        "dp": 14
                    },
                    "5": {
                        "dp": 16
                    },
                    "6": {
                        "dp": 19
                    },
                    "7": {
                        "dp": 22
                    },
                    "8": {
                        "dp": 25
                    },
                    "9": {
                        "dp": 28
                    },
                    "10": {
                        "dp": 31
                    },
                    "11": {
                        "dp": 34
                    },
                    "12": {
                        "dp": 37
                    },
                    "13": {
                        "dp": 40
                    },
                    "14": {
                        "dp": 43
                    },
                    "15": {
                        "dp": 46
                    },
                    "16": {
                        "dp": 51
                    },
                    "17": {
                        "dp": 56
                    },
                    "18": {
                        "dp": 64
                    },
                    "19": {
                        "dp": 69
                    },
                    "20": {
                        "dp": 74
                    }
                }
            },
            "Grunil Helmet": {
                "set": "Grunil",
                "dp": 3,
                "rarity": "uncommon",
                "gems": 2,
                "item_effects": {
                    "dr": 2
                },
                "enhancement": {
                    "1": {
                        "dp": 6
                    },
                    "2": {
                        "dp": 9
                    },
                    "3": {
                        "dp": 11
                    },
                    "4": {
                        "dp": 13
                    },
                    "5": {
                        "dp": 15
                    },
                    "6": {
                        "dp": 18
                    },
                    "7": {
                        "dp": 21
                    },
                    "8": {
                        "dp": 24
                    },
                    "9": {
                        "dp": 27
                    },
                    "10": {
                        "dp": 30
                    },
                    "11": {
                        "dp": 33
                    },
                    "12": {
                        "dp": 36
                    },
                    "13": {
                        "dp": 39
                    },
                    "14": {
                        "dp": 42
                    },
                    "15": {
                        "dp": 45
                    },
                    "16": {
                        "dp": 50
                    },
                    "17": {
                        "dp": 55
                    },
                    "18": {
                        "dp": 63
                    },
                    "19": {
                        "dp": 68
                    },
                    "20": {
                        "dp": 73
                    }
                }
            },
            "Dobart Helmet": {
                "set": "Dobart",
                "dp": 9,
                "rarity": "uncommon",
                "gems": 1,
                "item_effects": {
                    "ev": 0
                },
                "enhancement": {
                    "1": {
                        "dp": 11
                    },
                    "2": {
                        "dp": 13
                    },
                    "3": {
                        "dp": 14
                    },
                    "4": {
                        "dp": 15
                    },
                    "5": {
                        "dp": 16
                    }
                }
            },
            "Helmet of Hercules\' Might": {
                "set": "Hercules\' Might",
                "dp": 3,
                "rarity": "uncommon",
                "gems": 2,
                "item_effects": {},
                "enhancement": {
                    "1": {
                        "dp": 6
                    },
                    "2": {
                        "dp": 9
                    },
                    "3": {
                        "dp": 11
                    },
                    "4": {
                        "dp": 13
                    },
                    "5": {
                        "dp": 15
                    },
                    "6": {
                        "dp": 18
                    },
                    "7": {
                        "dp": 21
                    },
                    "8": {
                        "dp": 24
                    },
                    "9": {
                        "dp": 27
                    },
                    "10": {
                        "dp": 30
                    },
                    "11": {
                        "dp": 33
                    },
                    "12": {
                        "dp": 36
                    },
                    "13": {
                        "dp": 39
                    },
                    "14": {
                        "dp": 42
                    },
                    "15": {
                        "dp": 45
                    },
                    "16": {
                        "dp": 50
                    },
                    "17": {
                        "dp": 55
                    },
                    "18": {
                        "dp": 63
                    },
                    "19": {
                        "dp": 68
                    },
                    "20": {
                        "dp": 73
                    }
                }
            },
            "Luck Helmet of Fortuna": {
                "set": "Luck of Fortuna",
                "dp": 3,
                "rarity": "uncommon",
                "gems": 2,
                "item_effects": {},
                "enhancement": {
                    "1": {
                        "dp": 6
                    },
                    "2": {
                        "dp": 9
                    },
                    "3": {
                        "dp": 11
                    },
                    "4": {
                        "dp": 13
                    },
                    "5": {
                        "dp": 15
                    },
                    "6": {
                        "dp": 18
                    },
                    "7": {
                        "dp": 21
                    },
                    "8": {
                        "dp": 24
                    },
                    "9": {
                        "dp": 27
                    },
                    "10": {
                        "dp": 30
                    },
                    "11": {
                        "dp": 33
                    },
                    "12": {
                        "dp": 36
                    },
                    "13": {
                        "dp": 39
                    },
                    "14": {
                        "dp": 42
                    },
                    "15": {
                        "dp": 45
                    },
                    "16": {
                        "dp": 50
                    },
                    "17": {
                        "dp": 55
                    },
                    "18": {
                        "dp": 63
                    },
                    "19": {
                        "dp": 68
                    },
                    "20": {
                        "dp": 73
                    }
                }
            },
            "Rocaba Helmet": {
                "set": "Rocaba",
                "dp": 3,
                "rarity": "uncommon",
                "gems": 2,
                "item_effects": {},
                "enhancement": {
                    "1": {
                        "dp": 6
                    },
                    "2": {
                        "dp": 9
                    },
                    "3": {
                        "dp": 11
                    },
                    "4": {
                        "dp": 13
                    },
                    "5": {
                        "dp": 15
                    },
                    "6": {
                        "dp": 18
                    },
                    "7": {
                        "dp": 21
                    },
                    "8": {
                        "dp": 24
                    },
                    "9": {
                        "dp": 27
                    },
                    "10": {
                        "dp": 30
                    },
                    "11": {
                        "dp": 33
                    },
                    "12": {
                        "dp": 36
                    },
                    "13": {
                        "dp": 39
                    },
                    "14": {
                        "dp": 42
                    },
                    "15": {
                        "dp": 45
                    },
                    "16": {
                        "dp": 50
                    },
                    "17": {
                        "dp": 55
                    },
                    "18": {
                        "dp": 63
                    },
                    "19": {
                        "dp": 68
                    },
                    "20": {
                        "dp": 73
                    }
                }
            },
            "Strength Helmet of Heve": {
                "set": "Strength of Heve",
                "dp": 3,
                "rarity": "uncommon",
                "gems": 2,
                "item_effects": {},
                "enhancement": {
                    "1": {
                        "dp": 6
                    },
                    "2": {
                        "dp": 9
                    },
                    "3": {
                        "dp": 11
                    },
                    "4": {
                        "dp": 13
                    },
                    "5": {
                        "dp": 15
                    },
                    "6": {
                        "dp": 18
                    },
                    "7": {
                        "dp": 21
                    },
                    "8": {
                        "dp": 24
                    },
                    "9": {
                        "dp": 27
                    },
                    "10": {
                        "dp": 30
                    },
                    "11": {
                        "dp": 33
                    },
                    "12": {
                        "dp": 36
                    },
                    "13": {
                        "dp": 39
                    },
                    "14": {
                        "dp": 42
                    },
                    "15": {
                        "dp": 45
                    },
                    "16": {
                        "dp": 50
                    },
                    "17": {
                        "dp": 55
                    },
                    "18": {
                        "dp": 63
                    },
                    "19": {
                        "dp": 68
                    },
                    "20": {
                        "dp": 73
                    }
                }
            },
            "Talis Helmet": {
                "set": "Talis",
                "dp": 3,
                "rarity": "uncommon",
                "gems": 1,
                "item_effects": {
                    "gr": 0
                },
                "enhancement": {
                    "1": {
                        "dp": 6
                    },
                    "2": {
                        "dp": 9
                    },
                    "3": {
                        "dp": 11
                    },
                    "4": {
                        "dp": 13
                    },
                    "5": {
                        "dp": 15
                    },
                    "6": {
                        "dp": 18
                    },
                    "7": {
                        "dp": 21
                    },
                    "8": {
                        "dp": 24
                    },
                    "9": {
                        "dp": 27
                    },
                    "10": {
                        "dp": 30
                    },
                    "11": {
                        "dp": 33
                    },
                    "12": {
                        "dp": 36
                    },
                    "13": {
                        "dp": 39
                    },
                    "14": {
                        "dp": 42
                    },
                    "15": {
                        "dp": 45
                    },
                    "16": {
                        "dp": 50
                    },
                    "17": {
                        "dp": 55
                    },
                    "18": {
                        "dp": 63
                    },
                    "19": {
                        "dp": 68
                    },
                    "20": {
                        "dp": 73
                    }
                }
            },
            "Taritas Helmet": {
                "set": "Taritas",
                "dp": 5,
                "rarity": "uncommon",
                "gems": 1,
                "item_effects": {
                    "kb": 0
                },
                "enhancement": {
                    "1": {
                        "dp": 6
                    },
                    "2": {
                        "dp": 9
                    },
                    "3": {
                        "dp": 11
                    },
                    "4": {
                        "dp": 13
                    },
                    "5": {
                        "dp": 15
                    },
                    "6": {
                        "dp": 18
                    },
                    "7": {
                        "dp": 21
                    },
                    "8": {
                        "dp": 24
                    },
                    "9": {
                        "dp": 27
                    },
                    "10": {
                        "dp": 30
                    },
                    "11": {
                        "dp": 33
                    },
                    "12": {
                        "dp": 36
                    },
                    "13": {
                        "dp": 39
                    },
                    "14": {
                        "dp": 42
                    },
                    "15": {
                        "dp": 45
                    },
                    "16": {
                        "dp": 50
                    },
                    "17": {
                        "dp": 55
                    },
                    "18": {
                        "dp": 63
                    },
                    "19": {
                        "dp": 68
                    },
                    "20": {
                        "dp": 73
                    }
                }
            },
            "Zereth Helmet": {
                "set": "Zereth",
                "dp": 5,
                "rarity": "uncommon",
                "gems": 1,
                "item_effects": {
                    "kd": 0
                },
                "enhancement": {
                    "1": {
                        "dp": 6
                    },
                    "2": {
                        "dp": 9
                    },
                    "3": {
                        "dp": 11
                    },
                    "4": {
                        "dp": 13
                    },
                    "5": {
                        "dp": 15
                    },
                    "6": {
                        "dp": 18
                    },
                    "7": {
                        "dp": 21
                    },
                    "8": {
                        "dp": 24
                    },
                    "9": {
                        "dp": 27
                    },
                    "10": {
                        "dp": 30
                    },
                    "11": {
                        "dp": 33
                    },
                    "12": {
                        "dp": 36
                    },
                    "13": {
                        "dp": 39
                    },
                    "14": {
                        "dp": 42
                    },
                    "15": {
                        "dp": 45
                    },
                    "16": {
                        "dp": 50
                    },
                    "17": {
                        "dp": 55
                    },
                    "18": {
                        "dp": 63
                    },
                    "19": {
                        "dp": 68
                    },
                    "20": {
                        "dp": 73
                    }
                }
            }
        },
        "armor": {
            "Agerian Armor": {
                "set": "Agerian",
                "dp": 7,
                "rarity": "uncommon",
                "gems": 1,
                "item_effects": {
                    "hp": 50
                },
                "enhancement": {
                    "1": {
                        "dp": 11
                    },
                    "2": {
                        "dp": 14
                    },
                    "3": {
                        "dp": 17
                    },
                    "4": {
                        "dp": 19
                    },
                    "5": {
                        "dp": 21
                    },
                    "6": {
                        "dp": 24
                    },
                    "7": {
                        "dp": 27
                    },
                    "8": {
                        "dp": 30
                    },
                    "9": {
                        "dp": 33
                    },
                    "10": {
                        "dp": 36
                    },
                    "11": {
                        "dp": 39
                    },
                    "12": {
                        "dp": 42
                    },
                    "13": {
                        "dp": 45
                    },
                    "14": {
                        "dp": 48
                    },
                    "15": {
                        "dp": 51
                    },
                    "16": {
                        "dp": 56
                    },
                    "17": {
                        "dp": 61
                    },
                    "18": {
                        "dp": 69
                    },
                    "19": {
                        "dp": 74
                    },
                    "20": {
                        "dp": 79
                    }
                }
            },
            "Grunil Armor": {
                "set": "Grunil",
                "dp": 6,
                "rarity": "uncommon",
                "gems": 2,
                "item_effects": {},
                "enhancement": {
                    "1": {
                        "dp": 10
                    },
                    "2": {
                        "dp": 13
                    },
                    "3": {
                        "dp": 16
                    },
                    "4": {
                        "dp": 18
                    },
                    "5": {
                        "dp": 20
                    },
                    "6": {
                        "dp": 23
                    },
                    "7": {
                        "dp": 26
                    },
                    "8": {
                        "dp": 29
                    },
                    "9": {
                        "dp": 32
                    },
                    "10": {
                        "dp": 35
                    },
                    "11": {
                        "dp": 38
                    },
                    "12": {
                        "dp": 41
                    },
                    "13": {
                        "dp": 44
                    },
                    "14": {
                        "dp": 47
                    },
                    "15": {
                        "dp": 50
                    },
                    "16": {
                        "dp": 55
                    },
                    "17": {
                        "dp": 60
                    },
                    "18": {
                        "dp": 68
                    },
                    "19": {
                        "dp": 73
                    },
                    "20": {
                        "dp": 78
                    }

                }
            },
            "Dobart Armor": {
                "set": "Dobart",
                "dp": 11,
                "rarity": "uncommon",
                "gems": 1,
                "item_effects": {
                    "ev": 0
                },
                "enhancement": {
                    "1": {
                        "dp": 13
                    },
                    "2": {
                        "dp": 15
                    },
                    "3": {
                        "dp": 17
                    },
                    "4": {
                        "dp": 19
                    },
                    "5": {
                        "dp": 21
                    }
                }
            },
            "Armor of Hercules\' Might": {
                "set": "Hercules\' Might",
                "dp": 6,
                "rarity": "uncommon",
                "gems": 2,
                "item_effects": {},
                "enhancement": {
                    "1": {
                        "dp": 10
                    },
                    "2": {
                        "dp": 13
                    },
                    "3": {
                        "dp": 16
                    },
                    "4": {
                        "dp": 18
                    },
                    "5": {
                        "dp": 20
                    },
                    "6": {
                        "dp": 23
                    },
                    "7": {
                        "dp": 26
                    },
                    "8": {
                        "dp": 29
                    },
                    "9": {
                        "dp": 32
                    },
                    "10": {
                        "dp": 35
                    },
                    "11": {
                        "dp": 38
                    },
                    "12": {
                        "dp": 41
                    },
                    "13": {
                        "dp": 44
                    },
                    "14": {
                        "dp": 47
                    },
                    "15": {
                        "dp": 50
                    },
                    "16": {
                        "dp": 55
                    },
                    "17": {
                        "dp": 60
                    },
                    "18": {
                        "dp": 68
                    },
                    "19": {
                        "dp": 73
                    },
                    "20": {
                        "dp": 78
                    }
                }
            },
            "Luck Armor of Fortuna": {
                "set": "Luck of Fortuna",
                "dp": 6,
                "rarity": "uncommon",
                "gems": 2,
                "item_effects": {},
                "enhancement": {
                    "1": {
                        "dp": 10
                    },
                    "2": {
                        "dp": 13
                    },
                    "3": {
                        "dp": 16
                    },
                    "4": {
                        "dp": 18
                    },
                    "5": {
                        "dp": 20
                    },
                    "6": {
                        "dp": 23
                    },
                    "7": {
                        "dp": 26
                    },
                    "8": {
                        "dp": 29
                    },
                    "9": {
                        "dp": 32
                    },
                    "10": {
                        "dp": 35
                    },
                    "11": {
                        "dp": 38
                    },
                    "12": {
                        "dp": 41
                    },
                    "13": {
                        "dp": 44
                    },
                    "14": {
                        "dp": 47
                    },
                    "15": {
                        "dp": 50
                    },
                    "16": {
                        "dp": 55
                    },
                    "17": {
                        "dp": 60
                    },
                    "18": {
                        "dp": 68
                    },
                    "19": {
                        "dp": 73
                    },
                    "20": {
                        "dp": 78
                    }
                }
            },
            "Rocaba Armor": {
                "set": "Rocaba",
                "dp": 6,
                "rarity": "uncommon",
                "gems": 2,
                "item_effects": {},
                "enhancement": {
                    "1": {
                        "dp": 10
                    },
                    "2": {
                        "dp": 13
                    },
                    "3": {
                        "dp": 16
                    },
                    "4": {
                        "dp": 18
                    },
                    "5": {
                        "dp": 20
                    },
                    "6": {
                        "dp": 23
                    },
                    "7": {
                        "dp": 26
                    },
                    "8": {
                        "dp": 29
                    },
                    "9": {
                        "dp": 32
                    },
                    "10": {
                        "dp": 35
                    },
                    "11": {
                        "dp": 38
                    },
                    "12": {
                        "dp": 41
                    },
                    "13": {
                        "dp": 44
                    },
                    "14": {
                        "dp": 47
                    },
                    "15": {
                        "dp": 50
                    },
                    "16": {
                        "dp": 55
                    },
                    "17": {
                        "dp": 60
                    },
                    "18": {
                        "dp": 68
                    },
                    "19": {
                        "dp": 73
                    },
                    "20": {
                        "dp": 78
                    }
                }
            },
            "Strength Armor of Heve": {
                "set": "Strength of Heve",
                "dp": 6,
                "rarity": "uncommon",
                "gems": 2,
                "item_effects": {},
                "enhancement": {
                    "1": {
                        "dp": 10
                    },
                    "2": {
                        "dp": 13
                    },
                    "3": {
                        "dp": 16
                    },
                    "4": {
                        "dp": 18
                    },
                    "5": {
                        "dp": 20
                    },
                    "6": {
                        "dp": 23
                    },
                    "7": {
                        "dp": 26
                    },
                    "8": {
                        "dp": 29
                    },
                    "9": {
                        "dp": 32
                    },
                    "10": {
                        "dp": 35
                    },
                    "11": {
                        "dp": 38
                    },
                    "12": {
                        "dp": 41
                    },
                    "13": {
                        "dp": 44
                    },
                    "14": {
                        "dp": 47
                    },
                    "15": {
                        "dp": 50
                    },
                    "16": {
                        "dp": 55
                    },
                    "17": {
                        "dp": 60
                    },
                    "18": {
                        "dp": 68
                    },
                    "19": {
                        "dp": 73
                    },
                    "20": {
                        "dp": 78
                    }
                }
            },
            "Talis Armor": {
                "set": "Talis",
                "dp": 6,
                "rarity": "uncommon",
                "gems": 1,
                "item_effects": {
                    "mpar": 5,
                    "wpar": 5,
                    "spar": 5
                },
                "enhancement": {
                    "1": {
                        "dp": 10
                    },
                    "2": {
                        "dp": 13
                    },
                    "3": {
                        "dp": 16
                    },
                    "4": {
                        "dp": 18
                    },
                    "5": {
                        "dp": 20
                    },
                    "6": {
                        "dp": 23
                    },
                    "7": {
                        "dp": 26
                    },
                    "8": {
                        "dp": 29
                    },
                    "9": {
                        "dp": 32
                    },
                    "10": {
                        "dp": 35
                    },
                    "11": {
                        "dp": 38
                    },
                    "12": {
                        "dp": 41
                    },
                    "13": {
                        "dp": 44
                    },
                    "14": {
                        "dp": 47
                    },
                    "15": {
                        "dp": 50
                    },
                    "16": {
                        "dp": 55
                    },
                    "17": {
                        "dp": 60
                    },
                    "18": {
                        "dp": 68
                    },
                    "19": {
                        "dp": 73
                    },
                    "20": {
                        "dp": 78
                    }
                }
            },
            "Taritas Armor": {
                "set": "Taritas",
                "dp": 8,
                "rarity": "uncommon",
                "gems": 1,
                "item_effects": {
                    "hp": 20,
                    "mpwpsp": 20
                },
                "enhancement": {
                    "1": {
                        "dp": 12
                    },
                    "2": {
                        "dp": 15
                    },
                    "3": {
                        "dp": 18
                    },
                    "4": {
                        "dp": 20
                    },
                    "5": {
                        "dp": 22
                    },
                    "6": {
                        "dp": 25
                    },
                    "7": {
                        "dp": 28
                    },
                    "8": {
                        "dp": 31
                    },
                    "9": {
                        "dp": 34
                    },
                    "10": {
                        "dp": 37
                    },
                    "11": {
                        "dp": 40
                    },
                    "12": {
                        "dp": 43
                    },
                    "13": {
                        "dp": 46
                    },
                    "14": {
                        "dp": 49
                    },
                    "15": {
                        "dp": 52
                    },
                    "16": {
                        "dp": 57
                    },
                    "17": {
                        "dp": 62
                    },
                    "18": {
                        "dp": 70
                    },
                    "19": {
                        "dp": 75
                    },
                    "20": {
                        "dp": 80
                    }
                }
            },
            "Zereth Armor": {
                "set": "Zereth",
                "dp": 8,
                "rarity": "uncommon",
                "gems": 1,
                "item_effects": {
                    "hpar": 5,
                    "wgt": 50
                },
                "enhancement": {
                    "1": {
                        "dp": 12
                    },
                    "2": {
                        "dp": 15
                    },
                    "3": {
                        "dp": 18
                    },
                    "4": {
                        "dp": 20
                    },
                    "5": {
                        "dp": 22
                    },
                    "6": {
                        "dp": 25
                    },
                    "7": {
                        "dp": 28
                    },
                    "8": {
                        "dp": 31
                    },
                    "9": {
                        "dp": 34
                    },
                    "10": {
                        "dp": 37
                    },
                    "11": {
                        "dp": 40
                    },
                    "12": {
                        "dp": 43
                    },
                    "13": {
                        "dp": 46
                    },
                    "14": {
                        "dp": 49
                    },
                    "15": {
                        "dp": 52
                    },
                    "16": {
                        "dp": 57
                    },
                    "17": {
                        "dp": 62
                    },
                    "18": {
                        "dp": 70
                    },
                    "19": {
                        "dp": 75
                    },
                    "20": {
                        "dp": 80
                    }
                }
            }
        },
        "shoes": {
            "Agerian Shoes": {
                "set": "Agerian",
                "dp": 2,
                "rarity": "uncommon",
                "gems": 1,
                "item_effects": {
                    "ms": 1
                },
                "enhancement": {
                    "1": {
                        "dp": 4
                    },
                    "2": {
                        "dp": 6
                    },
                    "3": {
                        "dp": 8
                    },
                    "4": {
                        "dp": 10
                    },
                    "5": {
                        "dp": 12
                    },
                    "6": {
                        "dp": 14
                    },
                    "7": {
                        "dp": 16
                    },
                    "8": {
                        "dp": 18
                    },
                    "9": {
                        "dp": 20
                    },
                    "10": {
                        "dp": 22
                    },
                    "11": {
                        "dp": 24
                    },
                    "12": {
                        "dp": 26
                    },
                    "13": {
                        "dp": 28
                    },
                    "14": {
                        "dp": 30
                    },
                    "15": {
                        "dp": 32
                    },
                    "16": {
                        "dp": 37
                    },
                    "17": {
                        "dp": 42
                    },
                    "18": {
                        "dp": 50
                    },
                    "19": {
                        "dp": 55
                    },
                    "20": {
                        "dp": 60
                    }
                }
            },
            "Grunil Shoes": {
                "set": "Grunil",
                "dp": 1,
                "rarity": "uncommon",
                "gems": 2,
                "item_effects": {},
                "enhancement": {
                    "1": {
                        "dp": 3
                    },
                    "2": {
                        "dp": 5
                    },
                    "3": {
                        "dp": 7
                    },
                    "4": {
                        "dp": 9
                    },
                    "5": {
                        "dp": 11
                    },
                    "6": {
                        "dp": 13
                    },
                    "7": {
                        "dp": 15
                    },
                    "8": {
                        "dp": 17
                    },
                    "9": {
                        "dp": 19
                    },
                    "10": {
                        "dp": 21
                    },
                    "11": {
                        "dp": 23
                    },
                    "12": {
                        "dp": 25
                    },
                    "13": {
                        "dp": 27
                    },
                    "14": {
                        "dp": 29
                    },
                    "15": {
                        "dp": 31
                    },
                    "16": {
                        "dp": 36
                    },
                    "17": {
                        "dp": 41
                    },
                    "18": {
                        "dp": 49
                    },
                    "19": {
                        "dp": 54
                    },
                    "20": {
                        "dp": 59
                    }
                }
            },
            "Dobart Shoes": {
                "set": "Dobart",
                "dp": 7,
                "rarity": "uncommon",
                "gems": 1,
                "item_effects": {
                    "ev": 0
                },
                "enhancement": {
                    "1": {
                        "dp": 8
                    },
                    "2": {
                        "dp": 9
                    },
                    "3": {
                        "dp": 10
                    },
                    "4": {
                        "dp": 11
                    },
                    "5": {
                        "dp": 12
                    }
                }
            },
            "Shoes of Hercules\' Might": {
                "set": "Hercules\' Might",
                "dp": 1,
                "rarity": "uncommon",
                "gems": 2,
                "item_effects": {},
                "enhancement": {
                    "1": {
                        "dp": 3
                    },
                    "2": {
                        "dp": 5
                    },
                    "3": {
                        "dp": 7
                    },
                    "4": {
                        "dp": 9
                    },
                    "5": {
                        "dp": 11
                    },
                    "6": {
                        "dp": 13
                    },
                    "7": {
                        "dp": 15
                    },
                    "8": {
                        "dp": 17
                    },
                    "9": {
                        "dp": 19
                    },
                    "10": {
                        "dp": 21
                    },
                    "11": {
                        "dp": 23
                    },
                    "12": {
                        "dp": 25
                    },
                    "13": {
                        "dp": 27
                    },
                    "14": {
                        "dp": 29
                    },
                    "15": {
                        "dp": 31
                    },
                    "16": {
                        "dp": 36
                    },
                    "17": {
                        "dp": 41
                    },
                    "18": {
                        "dp": 49
                    },
                    "19": {
                        "dp": 54
                    },
                    "20": {
                        "dp": 59
                    }
                }
            },
            "Luck Shoes of Fortuna": {
                "set": "Luck of Fortuna",
                "dp": 1,
                "rarity": "uncommon",
                "gems": 2,
                "item_effects": {},
                "enhancement": {
                    "1": {
                        "dp": 3
                    },
                    "2": {
                        "dp": 5
                    },
                    "3": {
                        "dp": 7
                    },
                    "4": {
                        "dp": 9
                    },
                    "5": {
                        "dp": 11
                    },
                    "6": {
                        "dp": 13
                    },
                    "7": {
                        "dp": 15
                    },
                    "8": {
                        "dp": 17
                    },
                    "9": {
                        "dp": 19
                    },
                    "10": {
                        "dp": 21
                    },
                    "11": {
                        "dp": 23
                    },
                    "12": {
                        "dp": 25
                    },
                    "13": {
                        "dp": 27
                    },
                    "14": {
                        "dp": 29
                    },
                    "15": {
                        "dp": 31
                    },
                    "16": {
                        "dp": 36
                    },
                    "17": {
                        "dp": 41
                    },
                    "18": {
                        "dp": 49
                    },
                    "19": {
                        "dp": 54
                    },
                    "20": {
                        "dp": 59
                    }
                }
            },
            "Rocaba Shoes": {
                "set": "Rocaba",
                "dp": 1,
                "rarity": "uncommon",
                "gems": 2,
                "item_effects": {},
                "enhancement": {
                    "1": {
                        "dp": 3
                    },
                    "2": {
                        "dp": 5
                    },
                    "3": {
                        "dp": 7
                    },
                    "4": {
                        "dp": 9
                    },
                    "5": {
                        "dp": 11
                    },
                    "6": {
                        "dp": 13
                    },
                    "7": {
                        "dp": 15
                    },
                    "8": {
                        "dp": 17
                    },
                    "9": {
                        "dp": 19
                    },
                    "10": {
                        "dp": 21
                    },
                    "11": {
                        "dp": 23
                    },
                    "12": {
                        "dp": 25
                    },
                    "13": {
                        "dp": 27
                    },
                    "14": {
                        "dp": 29
                    },
                    "15": {
                        "dp": 31
                    },
                    "16": {
                        "dp": 36
                    },
                    "17": {
                        "dp": 41
                    },
                    "18": {
                        "dp": 49
                    },
                    "19": {
                        "dp": 54
                    },
                    "20": {
                        "dp": 59
                    }
                }
            },
            "Strength Shoes of Heve": {
                "set": "Strength of Heve",
                "dp": 1,
                "rarity": "uncommon",
                "gems": 2,
                "item_effects": {},
                "enhancement": {
                    "1": {
                        "dp": 3
                    },
                    "2": {
                        "dp": 5
                    },
                    "3": {
                        "dp": 7
                    },
                    "4": {
                        "dp": 9
                    },
                    "5": {
                        "dp": 11
                    },
                    "6": {
                        "dp": 13
                    },
                    "7": {
                        "dp": 15
                    },
                    "8": {
                        "dp": 17
                    },
                    "9": {
                        "dp": 19
                    },
                    "10": {
                        "dp": 21
                    },
                    "11": {
                        "dp": 23
                    },
                    "12": {
                        "dp": 25
                    },
                    "13": {
                        "dp": 27
                    },
                    "14": {
                        "dp": 29
                    },
                    "15": {
                        "dp": 31
                    },
                    "16": {
                        "dp": 36
                    },
                    "17": {
                        "dp": 41
                    },
                    "18": {
                        "dp": 49
                    },
                    "19": {
                        "dp": 54
                    },
                    "20": {
                        "dp": 59
                    }
                }
            },
            "Talis Shoes": {
                "set": "Talis",
                "dp": 1,
                "rarity": "uncommon",
                "gems": 1,
                "item_effects": {
                    "ms": 2
                },
                "enhancement": {
                    "1": {
                        "dp": 3
                    },
                    "2": {
                        "dp": 5
                    },
                    "3": {
                        "dp": 7
                    },
                    "4": {
                        "dp": 9
                    },
                    "5": {
                        "dp": 11
                    },
                    "6": {
                        "dp": 13
                    },
                    "7": {
                        "dp": 15
                    },
                    "8": {
                        "dp": 17
                    },
                    "9": {
                        "dp": 19
                    },
                    "10": {
                        "dp": 21
                    },
                    "11": {
                        "dp": 23
                    },
                    "12": {
                        "dp": 25
                    },
                    "13": {
                        "dp": 27
                    },
                    "14": {
                        "dp": 29
                    },
                    "15": {
                        "dp": 31
                    },
                    "16": {
                        "dp": 36
                    },
                    "17": {
                        "dp": 41
                    },
                    "18": {
                        "dp": 49
                    },
                    "19": {
                        "dp": 54
                    },
                    "20": {
                        "dp": 59
                    }
                }
            },
            "Taritas Shoes": {
                "set": "Taritas",
                "dp": 4,
                "rarity": "uncommon",
                "gems": 1,
                "item_effects": {
                    "ev": 0
                },
                "enhancement": {
                    "1": {
                        "dp": 6
                    },
                    "2": {
                        "dp": 8
                    },
                    "3": {
                        "dp": 10
                    },
                    "4": {
                        "dp": 12
                    },
                    "5": {
                        "dp": 14
                    },
                    "6": {
                        "dp": 16
                    },
                    "7": {
                        "dp": 18
                    },
                    "8": {
                        "dp": 20
                    },
                    "9": {
                        "dp": 22
                    },
                    "10": {
                        "dp": 24
                    },
                    "11": {
                        "dp": 26
                    },
                    "12": {
                        "dp": 28
                    },
                    "13": {
                        "dp": 30
                    },
                    "14": {
                        "dp": 32
                    },
                    "15": {
                        "dp": 34
                    },
                    "16": {
                        "dp": 39
                    },
                    "17": {
                        "dp": 44
                    },
                    "18": {
                        "dp": 52
                    },
                    "19": {
                        "dp": 57
                    },
                    "20": {
                        "dp": 62
                    }
                }
            },
            "Zereth Shoes": {
                "set": "Zereth",
                "dp": 3,
                "rarity": "uncommon",
                "gems": 1,
                "item_effects": {
                    "end": 200
                },
                "enhancement": {
                    "1": {
                        "dp": 5
                    },
                    "2": {
                        "dp": 7
                    },
                    "3": {
                        "dp": 9
                    },
                    "4": {
                        "dp": 11
                    },
                    "5": {
                        "dp": 13
                    },
                    "6": {
                        "dp": 15
                    },
                    "7": {
                        "dp": 17
                    },
                    "8": {
                        "dp": 19
                    },
                    "9": {
                        "dp": 21
                    },
                    "10": {
                        "dp": 23
                    },
                    "11": {
                        "dp": 25
                    },
                    "12": {
                        "dp": 27
                    },
                    "13": {
                        "dp": 29
                    },
                    "14": {
                        "dp": 31
                    },
                    "15": {
                        "dp": 33
                    },
                    "16": {
                        "dp": 38
                    },
                    "17": {
                        "dp": 43
                    },
                    "18": {
                        "dp": 51
                    },
                    "19": {
                        "dp": 56
                    },
                    "20": {
                        "dp": 61
                    }
                }
            }
        },
        "gloves": {
            "Agerian Gloves": {
                "set": "Agerian",
                "dp": 2,
                "rarity": "uncommon",
                "gems": 1,
                "item_effects": {
                    "as": 1,
                    "cs": 1
                },
                "enhancement": {
                    "1": {
                        "dp": 4
                    },
                    "2": {
                        "dp": 6
                    },
                    "3": {
                        "dp": 8
                    },
                    "4": {
                        "dp": 10
                    },
                    "5": {
                        "dp": 12
                    },
                    "6": {
                        "dp": 14
                    },
                    "7": {
                        "dp": 16
                    },
                    "8": {
                        "dp": 18
                    },
                    "9": {
                        "dp": 20
                    },
                    "10": {
                        "dp": 22
                    },
                    "11": {
                        "dp": 24
                    },
                    "12": {
                        "dp": 26
                    },
                    "13": {
                        "dp": 28
                    },
                    "14": {
                        "dp": 30
                    },
                    "15": {
                        "dp": 32
                    },
                    "16": {
                        "dp": 37
                    },
                    "17": {
                        "dp": 42
                    },
                    "18": {
                        "dp": 50
                    },
                    "19": {
                        "dp": 55
                    },
                    "20": {
                        "dp": 60
                    }
                }
            },
            "Grunil Gloves": {
                "set": "Grunil",
                "dp": 1,
                "rarity": "uncommon",
                "gems": 2,
                "item_effects": {},
                "enhancement": {
                    "1": {
                        "dp": 3
                    },
                    "2": {
                        "dp": 5
                    },
                    "3": {
                        "dp": 7
                    },
                    "4": {
                        "dp": 9
                    },
                    "5": {
                        "dp": 11
                    },
                    "6": {
                        "dp": 13
                    },
                    "7": {
                        "dp": 15
                    },
                    "8": {
                        "dp": 17
                    },
                    "9": {
                        "dp": 19
                    },
                    "10": {
                        "dp": 21
                    },
                    "11": {
                        "dp": 23
                    },
                    "12": {
                        "dp": 25
                    },
                    "13": {
                        "dp": 27
                    },
                    "14": {
                        "dp": 29
                    },
                    "15": {
                        "dp": 31
                    },
                    "16": {
                        "dp": 36
                    },
                    "17": {
                        "dp": 41
                    },
                    "18": {
                        "dp": 49
                    },
                    "19": {
                        "dp": 54
                    },
                    "20": {
                        "dp": 59
                    }
                }
            },
            "Dobart Gloves": {
                "set": "Dobart",
                "dp": 7,
                "rarity": "uncommon",
                "gems": 1,
                "item_effects": {
                    "ev": 0
                },
                "enhancement": {
                    "1": {
                        "dp": 8
                    },
                    "2": {
                        "dp": 9
                    },
                    "3": {
                        "dp": 10
                    },
                    "4": {
                        "dp": 11
                    },
                    "5": {
                        "dp": 12
                    }
                }
            },
            "Gloves of Hercules\' Might": {
                "set": "Hercules\' Might",
                "dp": 1,
                "rarity": "uncommon",
                "gems": 2,
                "item_effects": {},
                "enhancement": {
                    "1": {
                        "dp": 3
                    },
                    "2": {
                        "dp": 5
                    },
                    "3": {
                        "dp": 7
                    },
                    "4": {
                        "dp": 9
                    },
                    "5": {
                        "dp": 11
                    },
                    "6": {
                        "dp": 13
                    },
                    "7": {
                        "dp": 15
                    },
                    "8": {
                        "dp": 17
                    },
                    "9": {
                        "dp": 19
                    },
                    "10": {
                        "dp": 21
                    },
                    "11": {
                        "dp": 23
                    },
                    "12": {
                        "dp": 25
                    },
                    "13": {
                        "dp": 27
                    },
                    "14": {
                        "dp": 29
                    },
                    "15": {
                        "dp": 31
                    },
                    "16": {
                        "dp": 36
                    },
                    "17": {
                        "dp": 41
                    },
                    "18": {
                        "dp": 49
                    },
                    "19": {
                        "dp": 54
                    },
                    "20": {
                        "dp": 59
                    }
                }
            },
            "Luck Gloves of Fortuna": {
                "set": "Luck of Fortuna",
                "dp": 1,
                "rarity": "uncommon",
                "gems": 2,
                "item_effects": {},
                "enhancement": {
                    "1": {
                        "dp": 3
                    },
                    "2": {
                        "dp": 5
                    },
                    "3": {
                        "dp": 7
                    },
                    "4": {
                        "dp": 9
                    },
                    "5": {
                        "dp": 11
                    },
                    "6": {
                        "dp": 13
                    },
                    "7": {
                        "dp": 15
                    },
                    "8": {
                        "dp": 17
                    },
                    "9": {
                        "dp": 19
                    },
                    "10": {
                        "dp": 21
                    },
                    "11": {
                        "dp": 23
                    },
                    "12": {
                        "dp": 25
                    },
                    "13": {
                        "dp": 27
                    },
                    "14": {
                        "dp": 29
                    },
                    "15": {
                        "dp": 31
                    },
                    "16": {
                        "dp": 36
                    },
                    "17": {
                        "dp": 41
                    },
                    "18": {
                        "dp": 49
                    },
                    "19": {
                        "dp": 54
                    },
                    "20": {
                        "dp": 59
                    }
                }
            },
            "Rocaba Gloves": {
                "set": "Rocaba",
                "dp": 1,
                "rarity": "uncommon",
                "gems": 2,
                "item_effects": {},
                "enhancement": {
                    "1": {
                        "dp": 3
                    },
                    "2": {
                        "dp": 5
                    },
                    "3": {
                        "dp": 7
                    },
                    "4": {
                        "dp": 9
                    },
                    "5": {
                        "dp": 11
                    },
                    "6": {
                        "dp": 13
                    },
                    "7": {
                        "dp": 15
                    },
                    "8": {
                        "dp": 17
                    },
                    "9": {
                        "dp": 19
                    },
                    "10": {
                        "dp": 21
                    },
                    "11": {
                        "dp": 23
                    },
                    "12": {
                        "dp": 25
                    },
                    "13": {
                        "dp": 27
                    },
                    "14": {
                        "dp": 29
                    },
                    "15": {
                        "dp": 31
                    },
                    "16": {
                        "dp": 36
                    },
                    "17": {
                        "dp": 41
                    },
                    "18": {
                        "dp": 49
                    },
                    "19": {
                        "dp": 54
                    },
                    "20": {
                        "dp": 59
                    }
                }
            },
            "Strength Gloves of Heve": {
                "set": "Strength of Heve",
                "dp": 1,
                "rarity": "uncommon",
                "gems": 2,
                "item_effects": {},
                "enhancement": {
                    "1": {
                        "dp": 3
                    },
                    "2": {
                        "dp": 5
                    },
                    "3": {
                        "dp": 7
                    },
                    "4": {
                        "dp": 9
                    },
                    "5": {
                        "dp": 11
                    },
                    "6": {
                        "dp": 13
                    },
                    "7": {
                        "dp": 15
                    },
                    "8": {
                        "dp": 17
                    },
                    "9": {
                        "dp": 19
                    },
                    "10": {
                        "dp": 21
                    },
                    "11": {
                        "dp": 23
                    },
                    "12": {
                        "dp": 25
                    },
                    "13": {
                        "dp": 27
                    },
                    "14": {
                        "dp": 29
                    },
                    "15": {
                        "dp": 31
                    },
                    "16": {
                        "dp": 36
                    },
                    "17": {
                        "dp": 41
                    },
                    "18": {
                        "dp": 49
                    },
                    "19": {
                        "dp": 54
                    },
                    "20": {
                        "dp": 59
                    }
                }
            },
            "Talis Gloves": {
                "set": "Talis",
                "dp": 1,
                "rarity": "uncommon",
                "gems": 1,
                "item_effects": {
                    "chr": 1
                },
                "enhancement": {
                    "1": {
                        "dp": 3
                    },
                    "2": {
                        "dp": 5
                    },
                    "3": {
                        "dp": 7
                    },
                    "4": {
                        "dp": 9
                    },
                    "5": {
                        "dp": 11
                    },
                    "6": {
                        "dp": 13
                    },
                    "7": {
                        "dp": 15
                    },
                    "8": {
                        "dp": 17
                    },
                    "9": {
                        "dp": 19
                    },
                    "10": {
                        "dp": 21
                    },
                    "11": {
                        "dp": 23
                    },
                    "12": {
                        "dp": 25
                    },
                    "13": {
                        "dp": 27
                    },
                    "14": {
                        "dp": 29
                    },
                    "15": {
                        "dp": 31
                    },
                    "16": {
                        "dp": 36
                    },
                    "17": {
                        "dp": 41
                    },
                    "18": {
                        "dp": 49
                    },
                    "19": {
                        "dp": 54
                    },
                    "20": {
                        "dp": 59
                    }
                }
            },
            "Taritas Gloves": {
                "set": "Taritas",
                "dp": 3,
                "rarity": "uncommon",
                "gems": 1,
                "item_effects": {
                    "acc": 2
                },
                "enhancement": {
                    "1": {
                        "dp": 5
                    },
                    "2": {
                        "dp": 7
                    },
                    "3": {
                        "dp": 9
                    },
                    "4": {
                        "dp": 11
                    },
                    "5": {
                        "dp": 13
                    },
                    "6": {
                        "dp": 15
                    },
                    "7": {
                        "dp": 17
                    },
                    "8": {
                        "dp": 19
                    },
                    "9": {
                        "dp": 21
                    },
                    "10": {
                        "dp": 23
                    },
                    "11": {
                        "dp": 25
                    },
                    "12": {
                        "dp": 27
                    },
                    "13": {
                        "dp": 29
                    },
                    "14": {
                        "dp": 31
                    },
                    "15": {
                        "dp": 33
                    },
                    "16": {
                        "dp": 38
                    },
                    "17": {
                        "dp": 43
                    },
                    "18": {
                        "dp": 51
                    },
                    "19": {
                        "dp": 56
                    },
                    "20": {
                        "dp": 61
                    }
                }
            },
            "Zereth Gloves": {
                "set": "Zereth",
                "dp": 3,
                "rarity": "uncommon",
                "gems": 1,
                "item_effects": {
                    "dmgaes": 2
                },
                "enhancement": {
                    "1": {
                        "dp": 5
                    },
                    "2": {
                        "dp": 7
                    },
                    "3": {
                        "dp": 9
                    },
                    "4": {
                        "dp": 11
                    },
                    "5": {
                        "dp": 13
                    },
                    "6": {
                        "dp": 15
                    },
                    "7": {
                        "dp": 17
                    },
                    "8": {
                        "dp": 19
                    },
                    "9": {
                        "dp": 21
                    },
                    "10": {
                        "dp": 23
                    },
                    "11": {
                        "dp": 25
                    },
                    "12": {
                        "dp": 27
                    },
                    "13": {
                        "dp": 29
                    },
                    "14": {
                        "dp": 31
                    },
                    "15": {
                        "dp": 33
                    },
                    "16": {
                        "dp": 38
                    },
                    "17": {
                        "dp": 43
                    },
                    "18": {
                        "dp": 51
                    },
                    "19": {
                        "dp": 56
                    },
                    "20": {
                        "dp": 61
                    }
                }
            }
        },
        "earrings": {
            "Yuria Earring": {
                "dp": 0,
                "ap": 0,
                "rarity": "uncommon",
                "gems": 0,
                "item_effects": {
                    "dmgth": 2
                },
                "enhancement": {
                    "1": {
                        "dmgth": 3
                    },
                    "2": {
                        "dmgth": 4
                    },
                    "3": {
                        "dmgth": 5
                    },
                    "4": {
                        "dmgth": 6
                    },
                    "5": {
                        "dmgth": 8
                    }
                }
            },
            "Bares Earring": {
                "dp": 0,
                "ap": 2,
                "rarity": "uncommon",
                "gems": 0,
                "item_effects": {},
                "enhancement": {
                    "1": {
                        "ap": 3
                    },
                    "2": {
                        "ap": 4
                    },
                    "3": {
                        "ap": 5
                    },
                    "4": {
                        "ap": 6
                    },
                    "5": {
                        "ap": 8
                    }
                }
            }
        },
        "rings": {
            "Yuria Ring": {
                "dp": 0,
                "ap": 0,
                "rarity": "uncommon",
                "gems": 0,
                "item_effects": {
                    "dmgth": 2
                },
                "enhancement": {
                    "1": {
                        "dmgth": 3
                    },
                    "2": {
                        "dmgth": 4
                    },
                    "3": {
                        "dmgth": 5
                    },
                    "4": {
                        "dmgth": 6
                    },
                    "5": {
                        "dmgth": 8
                    }
                }
            },
            "Talis Ring": {
                "dp": 2,
                "ap": 0,
                "rarity": "uncommon",
                "gems": 0,
                "item_effects": {},
                "enhancement": {
                    "1": {
                        "dp": 3
                    },
                    "2": {
                        "dp": 4
                    },
                    "3": {
                        "dp": 5
                    },
                    "4": {
                        "dp": 6
                    },
                    "5": {
                        "dp": 8
                    }
                }
            },
            "Star Diamond Ring": {
                "dp": 0,
                "ap": 3,
                "rarity": "uncommon",
                "gems": 0,
                "item_effects": {
                    "ap": 3,
                    "hp": 30
                },
                "enhancement": {}
            },
            "Ring of Good Deeds": {
                "dp": 0,
                "ap": 2,
                "rarity": "uncommon",
                "gems": 0,
                "item_effects": {
                    "acc": 1
                },
                "enhancement": {
                    "1": {
                        "ap": 3,
                        "acc": 2
                    },
                    "2": {
                        "ap": 4,
                        "acc": 3
                    },
                    "3": {
                        "ap": 5,
                        "acc": 4
                    },
                    "4": {
                        "ap": 6,
                        "acc": 5
                    },
                    "5": {
                        "ap": 7,
                        "acc": 6
                    }
                }
            },
            "Ring of Dim Magical Power": {
                "dp": 0,
                "ap": 3,
                "rarity": "uncommon",
                "gems": 0,
                "item_effects": {},
                "enhancement": {}
            },
            "Ring of Concentrated Magical Power": {
                "dp": 0,
                "ap": 4,
                "rarity": "uncommon",
                "gems": 0,
                "item_effects": {},
                "enhancement": {}
            },
            "Ocean Sapphire Ring": {
                "dp": 0,
                "ap": 0,
                "rarity": "uncommon",
                "gems": 0,
                "item_effects": {
                    "dmgtdh": 3,
                    "hp": 30
                },
                "enhancement": {}
            },
            "Ljurik's Ring": {
                "dp": 2,
                "ap": 0,
                "rarity": "uncommon",
                "gems": 0,
                "item_effects": {
                    "hp": 20
                },
                "enhancement": {}
            },
            "Kalis Ring": {
                "dp": 0,
                "ap": 0,
                "rarity": "uncommon",
                "gems": 0,
                "item_effects": {
                    "acc": 2
                },
                "enhancement": {
                    "1": {
                        "acc": 3
                    },
                    "2": {
                        "acc": 4
                    },
                    "3": {
                        "acc": 5
                    },
                    "4": {
                        "acc": 6
                    },
                    "5": {
                        "acc": 7
                    }
                }
            },
            "Hesus Ring": {
                "dp": 1,
                "ap": 0,
                "rarity": "uncommon",
                "gems": 0,
                "item_effects": {},
                "enhancement": {
                    "1": {
                        "dp": 2
                    },
                    "2": {
                        "dp": 3
                    },
                    "3": {
                        "dp": 4
                    },
                    "4": {
                        "dp": 5
                    },
                    "5": {
                        "dp": 7
                    }
                }
            },
            "Gold Topaz Ring": {
                "dp": 0,
                "ap": 0,
                "rarity": "uncommon",
                "gems": 0,
                "item_effects": {
                    "dmgaes": 20,
                    "hp": 30
                },
                "enhancement": {}
            },
            "Forest Emerald Ring": {
                "dp": 0,
                "ap": 0,
                "rarity": "uncommon",
                "gems": 0,
                "item_effects": {
                    "acc": 3,
                    "hp": 30
                },
                "enhancement": {}
            },
            "Elisha Ring": {
                "dp": 0,
                "ap": 0,
                "rarity": "uncommon",
                "gems": 0,
                "item_effects": {
                    "hp": 15
                },
                "enhancement": {
                    "1": {
                        "hp": 30
                    },
                    "2": {
                        "hp": 45
                    },
                    "3": {
                        "hp": 60
                    },
                    "4": {
                        "hp": 75
                    },
                    "5": {
                        "hp": 100
                    }
                }
            },
            "Blood Ruby Ring": {
                "dp": 0,
                "ap": 0,
                "rarity": "uncommon",
                "gems": 0,
                "item_effects": {
                    "dmgth": 3,
                    "hp": 30
                },
                "enhancement": {}
            },
            "Bares Ring": {
                "dp": 0,
                "ap": 2,
                "rarity": "uncommon",
                "gems": 0,
                "item_effects": {},
                "enhancement": {
                    "1": {
                        "ap": 3
                    },
                    "2": {
                        "ap": 4
                    },
                    "3": {
                        "ap": 5
                    },
                    "4": {
                        "ap": 6
                    },
                    "5": {
                        "ap": 8
                    }
                }
            },
            "Translucent Ocean Sapphire Ring": {
                "dp": 0,
                "ap": 0,
                "rarity": "rare",
                "gems": 0,
                "item_effects": {
                    "dmgtdh": 4,
                    "hp": 40
                },
                "enhancement": {}
            },
            "Starry Night Diamond Ring": {
                "dp": 0,
                "ap": 4,
                "rarity": "rare",
                "gems": 0,
                "item_effects": {
                    "ap": 4,
                    "hp": 40
                },
                "enhancement": {}
            },
            "Shrine Guardian Token": {
                "dp": 5,
                "ap": 0,
                "rarity": "rare",
                "gems": 0,
                "item_effects": {
                    "hp": 20
                },
                "enhancement": {
                    "1": {
                        "dp": 7,
                        "hp": 35
                    },
                    "2": {
                        "dp": 9,
                        "hp": 50
                    },
                    "3": {
                        "dp": 11,
                        "hp": 65
                    },
                    "4": {
                        "dp": 13,
                        "hp": 80
                    },
                    "5": {
                        "dp": 15,
                        "hp": 95
                    }
                }
            },
            "Shining Gold Topaz Ring": {
                "dp": 0,
                "ap": 0,
                "rarity": "rare",
                "gems": 0,
                "item_effects": {
                    "dmgth": 4,
                    "hp": 40
                },
                "enhancement": {}
            },
            "Sealed Spirit's Ring": {
                "dp": 0,
                "ap": 4,
                "rarity": "rare",
                "gems": 0,
                "item_effects": {
                    "acc": 1
                },
                "enhancement": {
                    "1": {
                        "ap": 5,
                        "acc": 2
                    },
                    "2": {
                        "ap": 6,
                        "acc": 3
                    }
                }
            },
            "Saya's Ring of Eternity": {
                "dp": 7,
                "ap": 0,
                "rarity": "rare",
                "gems": 0,
                "item_effects": {
                    "mpwpsp": 50
                },
                "enhancement": {}
            },
            "Sahazad's Ring of Monarch": {
                "dp": 0,
                "ap": 7,
                "rarity": "rare",
                "gems": 0,
                "item_effects": {
                    "hp": 25
                },
                "enhancement": {}
            },
            "Ring of Sealed Magical Power": {
                "dp": 0,
                "ap": 5,
                "rarity": "rare",
                "gems": 0,
                "item_effects": {},
                "enhancement": {
                    "1": {
                        "ap": 6
                    },
                    "2": {
                        "ap": 7
                    },
                    "3": {
                        "ap": 8
                    },
                    "4": {
                        "ap": 9
                    },
                    "5": {
                        "ap": 10
                    }
                }
            },
            "Red Coral Ring": {
                "dp": 3,
                "ap": 4,
                "rarity": "rare",
                "gems": 0,
                "item_effects": {
                    "stam": 50
                },
                "enhancement": {
                    "1": {
                        "ap": 5,
                        "dp": 4
                    },
                    "2": {
                        "ap": 6,
                        "dp": 5
                    },
                    "3": {
                        "ap": 7,
                        "dp": 6
                    },
                    "4": {
                        "ap": 8,
                        "dp": 7
                    },
                    "5": {
                        "ap": 9,
                        "dp": 8
                    }
                }
            },
            "Placid Forest Emerald Ring": {
                "dp": 0,
                "ap": 0,
                "rarity": "rare",
                "gems": 0,
                "item_effects": {
                    "acc": 4,
                    "hp": 40
                },
                "enhancement": {}
            },
            "Outlaw's Ring": {
                "dp": 4,
                "ap": 3,
                "rarity": "rare",
                "gems": 0,
                "item_effects": {
                    "stam": 50
                },
                "enhancement": {
                    "1": {
                        "ap": 4,
                        "dp": 5
                    },
                    "2": {
                        "ap": 5,
                        "dp": 6
                    },
                    "3": {
                        "ap": 6,
                        "dp": 7
                    },
                    "4": {
                        "ap": 7,
                        "dp": 8
                    },
                    "5": {
                        "ap": 8,
                        "dp": 9
                    }
                }
            },
            "Nert Ring": {
                "dp": 0,
                "ap": 0,
                "rarity": "rare",
                "gems": 0,
                "item_effects": {
                    "acc": 1,
                    "hp": 25
                },
                "enhancement": {
                    "1": {
                        "acc": 2,
                        "hp": 50
                    },
                    "2": {
                        "acc": 3,
                        "hp": 75
                    },
                    "3": {
                        "acc": 4,
                        "hp": 100
                    },
                    "4": {
                        "acc": 5,
                        "hp": 125
                    },
                    "5": {
                        "acc": 6,
                        "hp": 150
                    }
                }
            },
            "Mark of Shadow": {
                "dp": 0,
                "ap": 5,
                "rarity": "rare",
                "gems": 0,
                "item_effects": {},
                "enhancement": {
                    "1": {
                        "ap": 7
                    },
                    "2": {
                        "ap": 9
                    },
                    "3": {
                        "ap": 11
                    },
                    "4": {
                        "ap": 13
                    },
                    "5": {
                        "ap": 15
                    }
                }
            },
            "Manmehan's Ring of Gold": {
                "dp": 7,
                "ap": 0,
                "rarity": "rare",
                "gems": 0,
                "item_effects": {
                    "hp": 50
                },
                "enhancement": {}
            },
            "Dark Blood Ruby Ring": {
                "dp": 0,
                "ap": 0,
                "rarity": "rare",
                "gems": 0,
                "item_effects": {
                    "dmgth": 4,
                    "hp": 40
                },
                "enhancement": {}
            },
            "Blue Coral Ring": {
                "dp": 0,
                "ap": 5,
                "rarity": "rare",
                "gems": 0,
                "item_effects": {
                    "mpwpsp": 25
                },
                "enhancement": {
                    "1": {
                        "ap": 6,
                        "mpwpsp": 30
                    },
                    "2": {
                        "ap": 7,
                        "mpwpsp": 35
                    },
                    "3": {
                        "ap": 8,
                        "mpwpsp": 40
                    },
                    "4": {
                        "ap": 9,
                        "mpwpsp": 45
                    },
                    "5": {
                        "ap": 10,
                        "mpwpsp": 50
                    }
                }
            },
            "Barhan's Ring of Conquest": {
                "dp": 0,
                "ap": 7,
                "rarity": "rare",
                "gems": 0,
                "item_effects": {
                    "mpwpsp": 25
                },
                "enhancement": {}
            },
            "Corrupt Ruby Ring": {
                "dp": 0,
                "ap": 0,
                "rarity": "epic",
                "gems": 0,
                "item_effects": {
                    "dmgth": 5,
                    "hp": 50
                },
                "enhancement": {}
            },
            "Diamond Ring of Fortitude": {
                "dp": 0,
                "ap": 5,
                "rarity": "epic",
                "gems": 0,
                "item_effects": {
                    "ap": 5,
                    "hp": 50
                },
                "enhancement": {}
            },
            "Emerald Ring of Tranquility": {
                "dp": 0,
                "ap": 0,
                "rarity": "epic",
                "gems": 0,
                "item_effects": {
                    "acc": 5,
                    "hp": 50
                },
                "enhancement": {}
            },
            "Sapphire Ring of Storms": {
                "dp": 0,
                "ap": 0,
                "rarity": "epic",
                "gems": 0,
                "item_effects": {
                    "dmgtdh": 5,
                    "hp": 50
                },
                "enhancement": {}
            },
            "Topaz Ring of Regeneration": {
                "dp": 0,
                "ap": 0,
                "rarity": "epic",
                "gems": 0,
                "item_effects": {
                    "dmgaes": 5,
                    "hp": 50
                },
                "enhancement": {}
            },
            "Ring of Crescent Guardian": {
                "dp": 0,
                "ap": 5,
                "rarity": "epic",
                "gems": 0,
                "item_effects": {},
                "enhancement": {
                    "1": {
                        "ap": 8
                    },
                    "2": {
                        "ap": 11
                    },
                    "3": {
                        "ap": 14
                    },
                    "4": {
                        "ap": 17
                    },
                    "5": {
                        "ap": 20
                    }
                }
            },
            "Ring of Cadry Guardian": {
                "dp": 5,
                "ap": 0,
                "rarity": "epic",
                "gems": 0,
                "item_effects": {
                    "hp": 25,
                    "mpwpsp": 25
                },
                "enhancement": {
                    "1": {
                        "dp": 8,
                        "hp": 40
                    },
                    "2": {
                        "dp": 11,
                        "hp": 55
                    },
                    "3": {
                        "dp": 14,
                        "hp": 70
                    },
                    "4": {
                        "dp": 17,
                        "hp": 85
                    },
                    "5": {
                        "dp": 20,
                        "hp": 100
                    }
                }
            }
        },
        "necklaces": {
            "Yuria Necklace": {
                "dp": 0,
                "ap": 0,
                "rarity": "uncommon",
                "gems": 0,
                "item_effects": {
                    "dmgth": 4
                },
                "enhancement": {
                    "1": {
                        "dmgth": 6
                    },
                    "2": {
                        "dmgth": 8
                    },
                    "3": {
                        "dmgth": 10
                    },
                    "4": {
                        "dmgth": 12
                    },
                    "5": {
                        "dmgth": 15
                    }
                }
            },
            "Talis Necklace": {
                "dp": 4,
                "ap": 0,
                "rarity": "uncommon",
                "gems": 0,
                "item_effects": {},
                "enhancement": {
                    "1": {
                        "dp": 6
                    },
                    "2": {
                        "dp": 8
                    },
                    "3": {
                        "dp": 10
                    },
                    "4": {
                        "dp": 12
                    },
                    "5": {
                        "dp": 14
                    }
                }
            },
            "Kalis Necklace": {
                "dp": 0,
                "ap": 0,
                "rarity": "uncommon",
                "gems": 0,
                "item_effects": {
                    "acc": 4
                },
                "enhancement": {
                    "1": {
                        "acc": 6
                    },
                    "2": {
                        "acc": 8
                    },
                    "3": {
                        "acc": 10
                    },
                    "4": {
                        "acc": 12
                    },
                    "5": {
                        "acc": 15
                    }
                }
            },
            "Necklace of Dim Magical Power": {
                "dp": 0,
                "ap": 3,
                "rarity": "uncommon",
                "gems": 0,
                "item_effects": {},
                "enhancement": {}
            },
            "Necklace of Concentrated Magical Power": {
                "dp": 0,
                "ap": 4,
                "rarity": "uncommon",
                "gems": 0,
                "item_effects": {},
                "enhancement": {}
            },
            "Hesus Necklace": {
                "dp": 2,
                "ap": 0,
                "rarity": "uncommon",
                "gems": 0,
                "item_effects": {},
                "enhancement": {
                    "1": {
                        "dp": 4
                    },
                    "2": {
                        "dp": 6
                    },
                    "3": {
                        "dp": 8
                    },
                    "4": {
                        "dp": 10
                    },
                    "5": {
                        "dp": 12
                    }
                }
            },
            "Elisha Necklace": {
                "dp": 0,
                "ap": 0,
                "rarity": "uncommon",
                "gems": 0,
                "item_effects": {
                    "hprc": 2,
                    "mprc": 2
                },
                "enhancement": {
                    "1": {
                        "hprc": 4,
                        "mprc": 4
                    },
                    "2": {
                        "hprc": 6,
                        "mprc": 6
                    },
                    "3": {
                        "hprc": 8,
                        "mprc": 8
                    },
                    "4": {
                        "hprc": 10,
                        "mprc": 10
                    },
                    "5": {
                        "hprc": 15,
                        "mprc": 15
                    }
                }
            },
            "Bares Necklace": {
                "dp": 0,
                "ap": 4,
                "rarity": "uncommon",
                "gems": 0,
                "item_effects": {},
                "enhancement": {
                    "1": {
                        "ap": 6
                    },
                    "2": {
                        "ap": 8
                    },
                    "3": {
                        "ap": 10
                    },
                    "4": {
                        "ap": 12
                    },
                    "5": {
                        "ap": 15
                    }
                }
            },
            "Scarla Necklace": {
                "dp": 5,
                "ap": 5,
                "rarity": "rare",
                "gems": 0,
                "item_effects": {},
                "enhancement": {
                    "1": {
                        "ap": 6,
                        "dp": 6
                    },
                    "2": {
                        "ap": 7,
                        "dp": 7
                    },
                    "3": {
                        "ap": 8,
                        "dp": 8
                    },
                    "4": {
                        "ap": 9,
                        "dp": 9
                    },
                    "5": {
                        "ap": 10,
                        "dp": 10
                    }
                }
            },
            "Necklace of Sealed Magical Power": {
                "dp": 0,
                "ap": 5,
                "rarity": "rare",
                "gems": 0,
                "item_effects": {},
                "enhancement": {
                    "1": {
                        "ap": 6
                    },
                    "2": {
                        "ap": 7
                    },
                    "3": {
                        "ap": 8
                    },
                    "4": {
                        "ap": 9
                    },
                    "5": {
                        "ap": 10
                    }
                }
            },
            "Necklace of Good Deeds": {
                "dp": 0,
                "ap": 6,
                "rarity": "rare",
                "gems": 0,
                "item_effects": {
                    "acc": 3
                },
                "enhancement": {
                    "1": {
                        "ap": 8,
                        "acc": 4
                    },
                    "2": {
                        "ap": 10,
                        "acc": 5
                    },
                    "3": {
                        "ap": 12,
                        "acc": 6
                    },
                    "4": {
                        "ap": 14,
                        "acc": 7
                    },
                    "5": {
                        "ap": 16,
                        "acc": 8
                    }
                }
            },
            "Translucent Ocean Sapphire Necklace": {
                "dp": 0,
                "ap": 4,
                "rarity": "rare",
                "gems": 0,
                "item_effects": {
                    "kb": 25
                },
                "enhancement": {}
            },
            "Starry Night Diamond Necklace": {
                "dp": 0,
                "ap": 4,
                "rarity": "rare",
                "gems": 0,
                "item_effects": {
                    "rta": 8
                },
                "enhancement": {}
            },
            "Shining Gold Topaz Necklace": {
                "dp": 0,
                "ap": 4,
                "rarity": "rare",
                "gems": 0,
                "item_effects": {
                    "kb": 25
                },
                "enhancement": {}
            },
            "Dark Blood Ruby Necklace": {
                "dp": 0,
                "ap": 4,
                "rarity": "rare",
                "gems": 0,
                "item_effects": {
                    "gr": 25
                },
                "enhancement": {}
            },
            "Placid Forest Emerald Necklace": {
                "dp": 0,
                "ap": 4,
                "rarity": "rare",
                "gems": 0,
                "item_effects": {
                    "sr": 25
                },
                "enhancement": {}
            },
            "Ogre Ring": {
                "dp": 0,
                "ap": 10,
                "rarity": "epic",
                "gems": 0,
                "item_effects": {},
                "enhancement": {
                    "1": {
                        "ap": 15
                    },
                    "2": {
                        "ap": 20
                    },
                    "3": {
                        "ap": 25
                    },
                    "4": {
                        "ap": 30
                    },
                    "5": {
                        "ap": 35
                    }
                }
            },
            "Corrupt Ruby Necklace": {
                "dp": 0,
                "ap": 5,
                "rarity": "epic",
                "gems": 0,
                "item_effects": {
                    "gr": 30
                },
                "enhancement": {}
            },
            "Diamond Necklace of Fortitude": {
                "dp": 0,
                "ap": 5,
                "rarity": "epic",
                "gems": 0,
                "item_effects": {
                    "rta": 10
                },
                "enhancement": {}
            },
            "Emerald Necklace of Tranquility": {
                "dp": 0,
                "ap": 5,
                "rarity": "epic",
                "gems": 0,
                "item_effects": {
                    "sr": 30
                },
                "enhancement": {}
            },
            "Sapphire Necklace of Storms": {
                "dp": 0,
                "ap": 5,
                "rarity": "epic",
                "gems": 0,
                "item_effects": {
                    "kb": 30
                },
                "enhancement": {}
            },
            "Topaz Necklace of Regeneration": {
                "dp": 0,
                "ap": 5,
                "rarity": "epic",
                "gems": 0,
                "item_effects": {
                    "kd": 30
                },
                "enhancement": {}
            }
        },
        "belts": {
            "Yuria Belt": {
                "dp": 0,
                "ap": 0,
                "rarity": "uncommon",
                "gems": 0,
                "item_effects": {
                    "dmgth": 2,
                    "wgt": 40
                },
                "enhancement": {
                    "1": {
                        "dmgth": 3
                    },
                    "2": {
                        "dmgth": 4
                    },
                    "3": {
                        "dmgth": 5
                    },
                    "4": {
                        "dmgth": 6
                    },
                    "5": {
                        "dmgth": 8
                    }
                }
            },
            "Talis Belt": {
                "dp": 2,
                "ap": 0,
                "rarity": "uncommon",
                "gems": 0,
                "item_effects": {
                    "wgt": 40
                },
                "enhancement": {
                    "1": {
                        "dp": 3
                    },
                    "2": {
                        "dp": 4
                    },
                    "3": {
                        "dp": 5
                    },
                    "4": {
                        "dp": 6
                    },
                    "5": {
                        "dp": 8
                    }
                }
            },
            "Kalis Belt": {
                "dp": 0,
                "ap": 0,
                "rarity": "uncommon",
                "gems": 0,
                "item_effects": {
                    "wgt": 40,
                    "acc": 2
                },
                "enhancement": {
                    "1": {
                        "acc": 3
                    },
                    "2": {
                        "acc": 4
                    },
                    "3": {
                        "acc": 5
                    },
                    "4": {
                        "acc": 6
                    },
                    "5": {
                        "acc": 7
                    }
                }
            },
            "Hesus Belt": {
                "dp": 2,
                "ap": 0,
                "rarity": "uncommon",
                "gems": 0,
                "item_effects": {
                    "wgt": 30
                },
                "enhancement": {
                    "1": {
                        "dp": 3
                    },
                    "2": {
                        "dp": 4
                    },
                    "3": {
                        "dp": 5
                    },
                    "4": {
                        "dp": 6
                    },
                    "5": {
                        "dp": 8
                    }
                }
            },
            "Elisha Belt": {
                "dp": 0,
                "ap": 0,
                "rarity": "uncommon",
                "gems": 0,
                "item_effects": {
                    "wgt": 20,
                    "hp": 20
                },
                "enhancement": {
                    "1": {
                        "hp": 30
                    },
                    "2": {
                        "hp": 40
                    },
                    "3": {
                        "hp": 50
                    },
                    "4": {
                        "hp": 60
                    },
                    "5": {
                        "hp": 80
                    }
                }
            },
            "Bares Belt": {
                "dp": 0,
                "ap": 2,
                "rarity": "uncommon",
                "gems": 0,
                "item_effects": {
                    "wgt": 40
                },
                "enhancement": {
                    "1": {
                        "ap": 3
                    },
                    "2": {
                        "ap": 4
                    },
                    "3": {
                        "ap": 5
                    },
                    "4": {
                        "ap": 6
                    },
                    "5": {
                        "ap": 8
                    }
                }
            },
            "Tree Spirit Belt": {
                "dp": 0,
                "ap": 5,
                "rarity": "rare",
                "gems": 0,
                "item_effects": {
                    "wgt": 80,
                    "acc": 1
                },
                "enhancement": {
                    "1": {
                        "ap": 7,
                        "acc": 2
                    },
                    "2": {
                        "ap": 9,
                        "acc": 3
                    },
                    "3": {
                        "ap": 11,
                        "acc": 4
                    },
                    "4": {
                        "ap": 13,
                        "acc": 5
                    },
                    "5": {
                        "ap": 15,
                        "acc": 6
                    }
                }
            },
            "Topaz Belt of Regeneration": {
                "dp": 0,
                "ap": 0,
                "rarity": "rare",
                "gems": 0,
                "item_effects": {
                    "wgt": 70,
                    "stam": 100
                },
                "enhancement": {}
            },
            "Sturdy Rhutum Elite Fighter Belt": {
                "dp": 3,
                "ap": 0,
                "rarity": "rare",
                "gems": 0,
                "item_effects": {
                    "wgt": 50
                },
                "enhancement": {}
            },
            "Rhutum Elite Belt": {
                "dp": 4,
                "ap": 0,
                "rarity": "rare",
                "gems": 0,
                "item_effects": {
                    "wgt": 60
                },
                "enhancement": {
                    "1": {
                        "dp": 6
                    },
                    "2": {
                        "dp": 8
                    },
                    "3": {
                        "dp": 10
                    },
                    "4": {
                        "dp": 12
                    },
                    "5": {
                        "dp": 14
                    }
                }
            },
            "Sapphire Belt of Storms": {
                "dp": 0,
                "ap": 0,
                "rarity": "rare",
                "gems": 0,
                "item_effects": {
                    "wgt": 70,
                    "mpwpsp": 50
                },
                "enhancement": {}
            },
            "Emerald Belt of Tranquility": {
                "dp": 0,
                "ap": 0,
                "rarity": "rare",
                "gems": 0,
                "item_effects": {
                    "wgt": 70,
                    "hprc": 5,
                    "mprc": 5,
                    "wprc": 5,
                    "sprc": 5
                },
                "enhancement": {}
            },
            "Diamond Belt of Fortitude": {
                "dp": 0,
                "ap": 0,
                "rarity": "rare",
                "gems": 0,
                "item_effects": {
                    "wgt": 70,
                    "dmgaes": 5
                },
                "enhancement": {}
            },
            "Corrupt Ruby Belt": {
                "dp": 0,
                "ap": 0,
                "rarity": "rare",
                "gems": 0,
                "item_effects": {
                    "wgt": 70,
                    "hp": 50
                },
                "enhancement": {}
            },
            "Belt of Shultz the Gladiator": {
                "dp": 0,
                "ap": 3,
                "rarity": "rare",
                "gems": 0,
                "item_effects": {
                    "wgt": 50
                },
                "enhancement": {
                    "1": {
                        "ap": 5,
                        "wgt": 60
                    },
                    "2": {
                        "ap": 7,
                        "wgt": 70
                    },
                    "3": {
                        "ap": 9,
                        "wgt": 80
                    },
                    "4": {
                        "ap": 11,
                        "wgt": 90
                    },
                    "5": {
                        "ap": 13,
                        "wgt": 100
                    }
                }
            },
            "Basilisk's Belt": {
                "dp": 0,
                "ap": 5,
                "rarity": "epic",
                "gems": 0,
                "item_effects": {
                    "wgt": 80
                },
                "enhancement": {
                    "1": {
                        "ap": 8
                    },
                    "2": {
                        "ap": 11
                    },
                    "3": {
                        "ap": 14
                    },
                    "4": {
                        "ap": 17
                    },
                    "5": {
                        "ap": 20
                    }
                }
            }
        },
        "main-weapons": {
            "berserker" :{
                "Yuria Axe": {
                    "set": "Yuria",
                    "ap_min": 16,
                    "ap_max": 21,
                    "rarity": "uncommon",
                    "gems": 1,
                    "item_effects": {
                        "dmgth": 5
                    },
                    "enhancement": {
                        "1": {
                            "ap_min": 20,
                            "ap_max": 25
                        },
                        "2": {
                            "ap_min": 23,
                            "ap_max": 28
                        },
                        "3": {
                            "ap_min": 26,
                            "ap_max": 31
                        },
                        "4": {
                            "ap_min": 28,
                            "ap_max": 33
                        },
                        "5": {
                            "ap_min": 30,
                            "ap_max": 35
                        },
                        "6": {
                            "ap_min": 33,
                            "ap_max": 38
                        },
                        "7": {
                            "ap_min": 36,
                            "ap_max": 41
                        },
                        "8": {
                            "ap_min": 40,
                            "ap_max": 45
                        },
                        "9": {
                            "ap_min": 44,
                            "ap_max": 49
                        },
                        "10": {
                            "ap_min": 48,
                            "ap_max": 53
                        },
                        "11": {
                            "ap_min": 52,
                            "ap_max": 57
                        },
                        "12": {
                            "ap_min": 56,
                            "ap_max": 61
                        },
                        "13": {
                            "ap_min": 60,
                            "ap_max": 65
                        },
                        "14": {
                            "ap_min": 64,
                            "ap_max": 69
                        },
                        "15": {
                            "ap_min": 68,
                            "ap_max": 73
                        },
                        "16": {
                            "ap_min": 76,
                            "ap_max": 81
                        },
                        "17": {
                            "ap_min": 84,
                            "ap_max": 89
                        },
                        "18": {
                            "ap_min": 96,
                            "ap_max": 101
                        },
                        "19": {
                            "ap_min": 104,
                            "ap_max": 109
                        },
                        "20": {
                            "ap_min": 112,
                            "ap_max": 117
                        }
                    }
                },
                "Liverto Axe": {
                    "set": "Liverto",
                    "ap_min": 18,
                    "ap_max": 22,
                    "rarity": "rare",
                    "gems": 2,
                    "item_effects": {
                        "chr": 3
                    },
                    "enhancement": {
                        "1": {
                            "ap_min": 22,
                            "ap_max": 26
                        },
                        "2": {
                            "ap_min": 25,
                            "ap_max": 29
                        },
                        "3": {
                            "ap_min": 28,
                            "ap_max": 32
                        },
                        "4": {
                            "ap_min": 30,
                            "ap_max": 34
                        },
                        "5": {
                            "ap_min": 32,
                            "ap_max": 36
                        },
                        "6": {
                            "ap_min": 35,
                            "ap_max": 39
                        },
                        "7": {
                            "ap_min": 38,
                            "ap_max": 42
                        },
                        "8": {
                            "ap_min": 43,
                            "ap_max": 47
                        },
                        "9": {
                            "ap_min": 48,
                            "ap_max": 52
                        },
                        "10": {
                            "ap_min": 53,
                            "ap_max": 57
                        },
                        "11": {
                            "ap_min": 58,
                            "ap_max": 62
                        },
                        "12": {
                            "ap_min": 63,
                            "ap_max": 67
                        },
                        "13": {
                            "ap_min": 68,
                            "ap_max": 72
                        },
                        "14": {
                            "ap_min": 73,
                            "ap_max": 77
                        },
                        "15": {
                            "ap_min": 78,
                            "ap_max": 82
                        },
                        "16": {
                            "ap_min": 86,
                            "ap_max": 90
                        },
                        "17": {
                            "ap_min": 94,
                            "ap_max": 98
                        },
                        "18": {
                            "ap_min": 106,
                            "ap_max": 110
                        },
                        "19": {
                            "ap_min": 114,
                            "ap_max": 118
                        },
                        "20": {
                            "ap_min": 122,
                            "ap_max": 126
                        }
                    }
                }
            },
            "ranger" :{

            },
            "sorceress" :{

            },
            "tamer" :{

            },
            "valkyrie" :{

            },
            "warrior" :{

            },
            "witch" :{

            },
            "wizard" :{

            }
        },
        "secondary-weapons": {
            "berserker" :{
                "Oros Ornamental Knot": {
                    "set": "Oros",
                    "ap_min": 4,
                    "ap_max": 6,
                    "dp": 4,
                    "rarity": "uncommon",
                    "gems": 1,
                    "item_effects": {
                        "ev": 1,
                        "dr": 3
                    },
                    "enhancement": {
                        "1": {
                            "ap_min": 5,
                            "ap_max": 7,
                            "dp": 4
                        },
                        "2": {
                            "ap_min": 5,
                            "ap_max": 8,
                            "dp": 4
                        },
                        "3": {
                            "ap_min": 5,
                            "ap_max": 9,
                            "dp": 4
                        },
                        "4": {
                            "ap_min": 5,
                            "ap_max": 10,
                            "dp": 4
                        },
                        "5": {
                            "ap_min": 6,
                            "ap_max": 11,
                            "dp": 4
                        },
                        "6": {
                            "ap_min": 6,
                            "ap_max": 12,
                            "dp": 4
                        },
                        "7": {
                            "ap_min": 6,
                            "ap_max": 13,
                            "dp": 4
                        },
                        "8": {
                            "ap_min": 6,
                            "ap_max": 14,
                            "dp": 4
                        },
                        "9": {
                            "ap_min": 6,
                            "ap_max": 15,
                            "dp": 4
                        },
                        "10": {
                            "ap_min": 7,
                            "ap_max": 16,
                            "dp": 4
                        },
                        "11": {
                            "ap_min": 7,
                            "ap_max": 17,
                            "dp": 4
                        },
                        "12": {
                            "ap_min": 7,
                            "ap_max": 18,
                            "dp": 4
                        },
                        "13": {
                            "ap_min": 7,
                            "ap_max": 19,
                            "dp": 4
                        },
                        "14": {
                            "ap_min": 7,
                            "ap_max": 20,
                            "dp": 4
                        },
                        "15": {
                            "ap_min": 8,
                            "ap_max": 21,
                            "dp": 4
                        },
                        "16": {
                            "ap_min": 11,
                            "ap_max": 24,
                            "dp": 4
                        },
                        "17": {
                            "ap_min": 14,
                            "ap_max": 27,
                            "dp": 4
                        },
                        "18": {
                            "ap_min": 20,
                            "ap_max": 33,
                            "dp": 4
                        },
                        "19": {
                            "ap_min": 23,
                            "ap_max": 36,
                            "dp": 4
                        },
                        "20": {
                            "ap_min": 26,
                            "ap_max": 39,
                            "dp": 4
                        }
                    }
                },
                "Nouver Ornamental Knot": {
                    "set": "Nouver",
                    "ap_min": 6,
                    "ap_max": 8,
                    "rarity": "epic",
                    "gems": 2,
                    "item_effects": {
                        "ar": 10
                    },
                    "enhancement": {
                        "1": {
                            "ap_min": 7,
                            "ap_max": 9
                        },
                        "2": {
                            "ap_min": 8,
                            "ap_max": 10
                        },
                        "3": {
                            "ap_min": 9,
                            "ap_max": 11
                        },
                        "4": {
                            "ap_min": 10,
                            "ap_max": 12
                        },
                        "5": {
                            "ap_min": 11,
                            "ap_max": 13
                        },
                        "6": {
                            "ap_min": 12,
                            "ap_max": 14
                        },
                        "7": {
                            "ap_min": 13,
                            "ap_max": 15
                        },
                        "8": {
                            "ap_min": 14,
                            "ap_max": 16
                        },
                        "9": {
                            "ap_min": 15,
                            "ap_max": 17
                        },
                        "10": {
                            "ap_min": 16,
                            "ap_max": 18
                        },
                        "11": {
                            "ap_min": 18,
                            "ap_max": 20
                        },
                        "12": {
                            "ap_min": 20,
                            "ap_max": 22
                        },
                        "13": {
                            "ap_min": 22,
                            "ap_max": 24
                        },
                        "14": {
                            "ap_min": 24,
                            "ap_max": 26
                        },
                        "15": {
                            "ap_min": 26,
                            "ap_max": 28
                        },
                        "16": {
                            "ap_min": 29,
                            "ap_max": 31
                        },
                        "17": {
                            "ap_min": 32,
                            "ap_max": 34
                        },
                        "18": {
                            "ap_min": 38,
                            "ap_max": 40
                        },
                        "19": {
                            "ap_min": 41,
                            "ap_max": 43
                        },
                        "20": {
                            "ap_min": 44,
                            "ap_max": 46
                        }
                    }
                }
            },
            "ranger" :{

            },
            "sorceress" :{

            },
            "tamer" :{

            },
            "valkyrie" :{

            },
            "warrior" :{

            },
            "witch" :{

            },
            "wizard" :{

            }
        }
    }
};