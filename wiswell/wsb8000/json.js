const wiswell = [
	{
		"mode": "1. 일반 식빵",
		"breads": [
			{
				"title": "기본 식빵",
				"recipe": {
					"밀가루": { "max": 500, "unit": "g" },
					"우유": { "max": 400, "unit": "ml" },
					"버터": { "max": 80, "unit": "g" },
					"소금": { "max": 10, "unit": "g" },
					"이스트": { "max": 7, "unit": "g" },
					"설탕": { "max": 50, "unit": "g" }
				},
				"step": {
					"seq": [
						"반죽 날을 장착 후 액체 재료 → 건조 재료 → 이스트 순으로 넣습니다.<br/>(*이스트가 액체 재료에 닿지 않도록 주의해 주세요.)",
						"전원 버튼을 누른 뒤 '1번 일반 식빵' 모드를 선택합니다.",
						"굽기 버튼으로 원하는 굽기 정도를 선택합니다.",
						"재료에 따른 빵 무게를 선택 후 전원 버튼을 눌러 작동을 시작합니다."
					]
				}
			}, {
				"title": "담백한 우유 식빵",
				"by": "일홍",
				"recipe": {
					"강력분": { "max": 500, "unit": "g" },
					"이스트": { "max": 8, "unit": "g" },
					"설탕": { "max": 40, "unit": "g" },
					"소금": { "max": 8, "unit": "g" },
					"버터": { "max": 40, "unit": "g" },
					"물": { "max": 120, "unit": "ml" },
					"우유": { "max": 200, "unit": "ml" }
				}
			}, {
				"title": "흑임자 식빵",
				"by": "일홍",
				"recipe": {
					"강력분": { "max": 500, "unit": "g" },
					"물": { "max": 300, "unit": "ml" },
					"생크림": { "max": 20, "unit": "g" },
					"흑임자 페이스트": { "max": 60, "unit": "g" },
					"설탕": { "max": 45, "unit": "g" },
					"소금": { "max": 8, "unit": "g" },
					"이스트": { "max": 8, "unit": "g" },
					"버터": { "max": 25, "unit": "g" },
					"검은깨": { "max": 30, "unit": "g" }
				},
				"step": {
					"txt": [
						"(*흑임자 페이스트가 없을 경우 흑임자 55g과 식물성 오일 5g을 넣고 갈아주세요.)"
					],
					"seq": [
						"수분 재료를 반죽기 통 안에 넣고 검은깨를 제외한 나머지 재료를 넣어줍니다.",
						"반죽2 중간에 알림음이 울리면 검은깨를 넣어줍니다.",
						"발효2가 끝나고 RMV로 뜨면 반죽 날 제거 후 반죽을 꺼내 원하는 모양으로 가볍게 성형해 줍니다.",
						"제빵기 안에 다ㅣ 반죽을 잘 넣어주고 뚜껑을 닫은 뒤 발효3과 굽기를 진행합니다."
					]
				}
			}
		]
	}, {
		"mode": "2. 프렌치빵",
		"breads": [
			{
				"title": "브리오슈 반죽[곰보(소보루) 밤식빵]",
				"by": "일홍",
				"recipe": {
					"강력분": { "max": 500, "unit": "g" },
					"우유": { "max": 85, "unit": "ml" },
					"물": { "max": 85, "unit": "ml" },
					"생크림": { "max": 30, "unit": "g" },
					"달걀": { "max": 50, "unit": "g" },
					"노른자": { "max": 3, "unit": "알" },
					"설탕": { "max": 70, "unit": "g" },
					"소금": { "max": 7, "unit": "g" },
					"이스트": { "max": 8, "unit": "g" },
					"버터": { "max": 90, "unit": "g" },
					"밤 다이스": { "min": 100, "max": 150, "unit": "g" }
					/*
					,
					"[아몬드크림] 버터": { "max": 40, "unit": "g" },
					"[아몬드크림] 설탕": { "max": 40, "unit": "g" },
					"[아몬드크림] 흰자": { "max": 25, "unit": "g" },
					"[아몬드크림] 아몬드 분말": { "max": 40, "unit": "g" },
					"[크럼블] 설탕": { "max": 50, "unit": "g" },
					"[크럼블] 버터": { "max": 50, "unit": "g" },
					"[크럼블] 박력분": { "max": 90, "unit": "g" }
					*/
				},
				"recipeComment": [
					"* 아몬드 크림: 버터 40g, 설탕 40g, 흰자 25g, 아몬드 분말 40g",
					"* 크럼블: 설탕 50g, 버터 50g, 박력분 90g"
				],
				"step": {
					"seq": [
						"우유 물 생크림 달걀을 먼저 넣어준 뒤 버터를 제외한 가루류를 넣어줍니다.",
						"반죽기 통을 제빵기에 정착한 뒤 프렌치 식빵 모드로 작동시킵니다.<br/>반죽1이 끝나면 버터를 넣어줍니다.",
						"아몬드 크림과 크럼블을 준비해둡니다.<br/><b>아몬드 크림</b>: 크림 화법으로 버터를 충분히 풀어준 후 설탕을 넣고 미색이 될 때까지 휘핑해줍니다.<br/>흰자를 넣고 휘핑한 후 아몬드 분말을 넣고 잘 섞어 주어 짤 주머니에 넣어줍니다.<br/><b>크럼블</b>: 체 친 가루류를 준비한 뒤 실온 버터를 넣고 가루에 버터 코팅 작업을 하여 크럼블로 준비해둡니다.",
						"2차 발효가 끝난 뒤 알림음 후 RMV로 바뀌면 잠시 멈춘 후 반죽 날 제거 후 반죽을 꺼내 반죽을 만져 밀어 펴준 뒤 아몬드 크림을 짠 후 얇게 펴 발라줍니다.",
						"밤 다이스를 반죽 위에 올려줍니다.",
						"위에서부터 말아서 마지막 부분을 잘 마무리해 줍니다.",
						"스크레이퍼나 칼로 반을 자른 후 꼬아서 마무리한 뒤 반죽기 통 안에 넣어줍니다.",
						"재 작동 후 크럼블을 반 정도 올리고 발효해 줍니다.<br/>굽기 전 다시 한번 남은 크럼블을 올려줍니다.",
						"제빵기 안에서 잠시 둔 후 꺼내어 충분히 식혀 자릅니다."
					]
				}
			}
		]
	}, {
		"mode": "3. 통밀빵",
		"breads": [
			{
				"title": "기본 통밀빵",
				"recipe": {
					"통밀가루": { "max": 500, "unit": "g" },
					"물": { "max": 390, "unit": "ml" },
					"플레인 요거트": { "max": 60, "unit": "g" },
					"소금": { "max": 7, "unit": "g" },
					"이스트": { "max": 8, "unit": "g" },
					"설탕": { "max": 8, "unit": "g" },
					"꿀": { "max": 34, "unit": "g" }
				},
				"recipeComment": [
					"<b>Tip</b>",
					"통밀 특유의 떫은 끝 맛 때문에 플레인 요거트와 꿀을 첨가합니다.",
					"플레인 요거트는 생략이 가능합니다."
				],
			}, {
				"title": "통밀 식빵",
				"by": "일홍",
				"recipe": {
					"물": { "max": 260, "unit": "ml" },
					"달걀": { "max": 100, "unit": "g" },
					"설탕": { "max": 25, "unit": "g" },
					"소금": { "max": 8, "unit": "g" },
					"강력분": { "max": 250, "unit": "g" },
					"통밀가루": { "max": 250, "unit": "g" },
					"이스트": { "max": 7, "unit": "g" },
					"버터": { "max": 20, "unit": "g" }
				},
				"step": {
					"seq": [
						"반죽기에 물과 달걀을 넣고 잘 저어줍니다.",
						"가루류 (설탕, 소금, 강력분, 통밀, 이스트)를 넣어줍니다.",
						"3번 통밀 미디엄으로 설정 후 동작 버튼을 눌러줍니다.",
						"반죽 1이 끝나면 실온의 버터를 넣고 나머지 단계를 진행합니다.",
						"발효 2가 작동하는 소리가 들린 후 RMV로 넘어가면 잠시 반죽을 분리해 성형한 뒤 다시 반죽기 안에 넣어줍니다.",
						"굽기가 끝나면 빵을 분리 후 우유나 버터를 윗면에 발라 마무리합니다."
					]
				}
			}
		]
	}, {
		"mode": "4. 달콤한 빵",
		"breads": [
			{
				"title": "달콤한 바나나빵",
				"recipe": {
					"박력분": { "max": 250, "unit": "g" },
					"중력분": { "max": 200, "unit": "g" },
					"설탕": { "max": 105, "unit": "g" },
					"소금": { "max": 4, "unit": "g" },
					"메이플 시럽(또는 꿀)": { "max": 95, "unit": "g" },
					"포도씨오일": { "max": 100, "unit": "ml" },
					"계란": { "max": 3, "unit": "개" },
					"베이킹소다": { "max": 5, "unit": "g" },
					"베이킹파우더": { "max": 5, "unit": "g" },
					"바나나": { "max": 320, "unit": "g" }
				},
				"recipeComment": [
					"<b>Tip</b>",
					"바나나는 잘 익은 숙성된 것으로 듬성듬성 잘라서 넣어준 뒤 굽기를 마지막 단께로 맞추면 속까지 충분히 익습니다.",
					"기호에 따라 호두 등의 견과류 분태 등을 넣어주셔도 맛있습니다."
				],
			}, {
				"title": "견과류 식빵",
				"recipe": {
					"강력분": { "max": 500, "unit": "g" },
					"우유": { "max": 400, "unit": "ml" },
					"버터": { "max": 80, "unit": "g" },
					"소금": { "max": 10, "unit": "g" },
					"이스트": { "max": 8, "unit": "g" },
					"설탕": { "max": 45, "unit": "g" },
					"크랜베리": { "min": 60, "max": 80, "unit": "g" },
					"호두분태": { "min": 80, "max": 100, "unit": "g" }
				}
			}, {
				"title": "옥수수 식빵",
				"by": "일홍",
				"recipe": {
					"우유": { "max": 150, "unit": "ml" },
					"물": { "max": 120, "unit": "ml" },
					"달걀": { "max": 50, "unit": "g" },
					"옥수수분말": { "max": 100, "unit": "g" },
					"강력분": { "max": 400, "unit": "g" },
					"설탕": { "max": 50, "unit": "g" },
					"소금": { "max": 8, "unit": "g" },
					"이스트": { "max": 8, "unit": "g" },
					"버터": { "max": 60, "unit": "g" },
					"캔 옥수수": { "max": 100, "unit": "g" }
				},
				"step": {
					"seq": [
						"우유, 물 달걀을 넣고 잘 섞어줍니다.",
						"버터를 제외한 모든 재료를 넣고 제빵기에 고정시켜 준 뒤 4번 달콤한 식빵 기능으로 작동 시킵니다.",
						"1번 반죽이 끝나면 버터를 넣어줍니다.",
						"2번 반죽 중 삐삐 알림음이 울리면 물기를 뺀 캔 옥수수를 넣어줍니다.",
						"발효 2가 RMV로 넘어가고 알람이 울리면 반죽 날 제거 후 반죽을 빼서 모양을 다듬은 후 제빵기에 넣어줍니다.",
						"발효 3과 굽기를 진행해 줍니다."
					]
				}
			}
		]
	}, {
		"mode": "5. 저탄수화물 빵",
		"breads": [
			{
				"title": "콩배기 흥국 쌀 식빵",
				"by": "일홍",
				"recipe": {
					"우유": { "max": 150, "unit": "ml" },
					"물": { "max": 140, "unit": "ml" },
					"계란": { "max": 50, "unit": "g" },
					"설탕": { "max": 50, "unit": "g" },
					"소금": { "max": 8, "unit": "g" },
					"강력 쌀가루": { "max": 480, "unit": "g" },
					"흥국 쌀가루": { "max": 20, "unit": "g" },
					"이스트": { "max": 8, "unit": "g" },
					"버터": { "max": 90, "unit": "g" },
					"충전물(완두콩배기나 삼색배기 밤 다이스 등)": { "max": 100, "unit": "g" }
				}
			}
		]
	}, {
		"mode": "6. 쌀가루 빵 (글루텐 프리)",
		"breads": [
			{
				"title": "쌀 식빵",
				"recipe": {
					"강력 쌀가루": { "max": 400, "unit": "g" },
					"우유": { "max": 170, "unit": "ml" },
					"물": { "max": 180, "unit": "ml" },
					"버터": { "max": 35, "unit": "g" },
					"소금": { "max": 6, "unit": "g" },
					"이스트": { "max": 7, "unit": "g" },
					"설탕": { "max": 20, "unit": "g" },
					"꿀": { "max": 15, "unit": "g" }
				}
			}
		]
	}, {
		"mode": "7. 쾌속빵",
		"breads": [
			{
				"title": "쾌속 일반 식빵",
				"recipe": {
					"쿠킹오일": { "max": 25, "unit": "ml" },
					"물": { "max": 120, "unit": "ml" },
					"우유": { "max": 200, "unit": "ml" },
					"강력분": { "max": 500, "unit": "g" },
					"이스트": { "max": 7, "unit": "g" },
					"설탕": { "max": 40, "unit": "g" },
					"소금": { "max": 8, "unit": "g" }
				}
			}
		]
	}, {
		"mode": "8. 케이크",
		"breads": [
			{
				"title": "당근 케이크",
				"recipe": {
					"박력분": { "max": 250, "unit": "g" },
					"중력분": { "max": 200, "unit": "g" },
					"베이킹파우더": { "max": 6, "unit": "g" },
					"베이킹소다": { "max": 5, "unit": "g" },
					"시나몬파우더": { "max": 6, "unit": "g" },
					"포도씨 오일": { "max": 220, "unit": "g" },
					"우유": { "max": 200, "unit": "ml" },
					"꿀": { "max": 120, "unit": "g" },
					"설탕": { "max": 95, "unit": "g" },
					"소금": { "max": 4, "unit": "g" },
					"계란(대)": { "max": 3, "unit": "개" },
					"당근(강판에 다져 수분 제거 후 준비)": { "max": 350, "unit": "g" },
					"다진 호두": { "max": 90, "unit": "g" }
				},
				"step": {
					"seq": [
						"계란을 풀어줍니다.",
						"풀어진 계란, 우유, 꿀 등 액체류를 제빵기 틀 안에 먼저 넣습니다.",
						"박력분, 중력분, 베이킹소다, 베이킹파우더, 시나몬 파우더 등 가루류를 제빵기 틀 안에 넣어줍니다.",
						"설탕, 소금을 넣고 수분이 빠진 잘게 다진 당근과 호두를 틀 안에 넣어줍니다."
					]
				}
			}, {
				"title": "아몬드 파운드 케이크",
				"by": "일홍",
				"recipe": {
					"박력분": { "max": 225, "unit": "g" },
					"아몬드 분말": { "max": 75, "unit": "g" },
					"설탕": { "max": 150, "unit": "g" },
					"달걀": { "max": 150, "unit": "g" },
					"베이킹파우더": { "max": 10, "unit": "g" },
					"버터": { "max": 180, "unit": "g" },
					"아몬드 슬라이스 적당량": {}
				},
				"recipeComment": [
					"(기호에 따라 크랜베리나 호두를 충전물로 넣어주셔도 좋습니다.)"
				],
				"step": {
					"seq": [
						"달걀을 잘 풀어준 뒤 풀어준 달걀에 버터를 제외한 재료를 제빵기 안에 넣어줍니다.",
						"8번 케이크 모드 다크로 설정 후 작동시켜줍니다.",
						"어느 정도 섞이면 실온 상태의 말랑해진 버터를 넣어줍니다.",
						"알람음이 울리면 넣고 싶은 충전물을 넣어줍니다.",
						"윗면을 정리해 준 뒤 아몬드 슬라이스를 올려줍니다.",
						"굽기를 진행합니다.",
						"어느 정도 식은 뒤 케이크를 분리해 줍니다."
					]
				}
			}
		]
	}, {
		"mode": "9. 반죽",
		"breads": [
			{
				"title": "호두 건포도 식빵",
				"by": "일홍",
				"recipe": {
					"물": { "max": 300, "unit": "ml" },
					"우유": { "max": 50, "unit": "ml" },
					"이스트": { "max": 8, "unit": "g" },
					"강력분": { "max": 500, "unit": "g" },
					"설탕": { "max": 40, "unit": "g" },
					"소금": { "max": 8, "unit": "g" },
					"버터": { "max": 25, "unit": "g" },
					"호두": { "min": 80, "max": 100, "unit": "g" },
					"건포도": { "min": 80, "max": 100, "unit": "g" }
				},
				"step": {
					"seq": [
						"물과 우유에 이스트를 넣고 잘 섞어 줍니다.",
						"9번 반죽 모드 10분 작동 후 버터를 넣어줍니다.",
						"9번 반죽 모드 최대치로 설정 후 작동시킵니다.",
						"반죽이 완료되면 2~3배의 크리로 반죽 통 안에서 발효시킵니다.",
						"4등분 한 뒤 둥글리기 후 20분 실온에서 휴지합니다.",
						"원루프 성형 후 오란다(대) 팬에 팬닝합니다.",
						"팬 높이만큼 발효되면 180~190도 예열된 오븐에 넣고 구워줍니다."
					],
					"tip": [
						"<b>Tip</b>",
						"오븐이 없는 경우 달콤한 빵 기능으로 모든 과정을 작동해 주셔도 좋습니다."
					]
				}
			}, {
				"title": "칼국수 / 수제비 반죽",
				"recipe": {
					"중력분": { "max": 1000, "unit": "g" },
					"소금 약간": {},
					"물": { "max": 600, "unit": "ml" }
				}
			}
		]
	}, {
		"mode": "10. 도우",
		"breads": [
			{
				"title": "브래드 스틱",
				"recipe": {
					"강력분": { "max": 150, "unit": "g" },
					"박력분": { "max": 150, "unit": "g" },
					"소금": { "max": 3, "unit": "g" },
					"꿀": { "max": 90, "unit": "g" },
					"우유": { "max": 120, "unit": "ml" },
					"물": { "max": 30, "unit": "ml" },
					"버터": { "max": 60, "unit": "g" },
					"이스트": { "max": 6, "unit": "g" }
				},
				"step": {
					"seq": [
						"제빵기에 버터를 제외한 재료를 넣고 작동합니다.",
						"1차 반죽이 끝난 뒤 버터를 넣고 남은 코스를 다시 작동합니다.",
						"발효 2가 완료되면 종료합니다.",
						"가스를 빼고 둥글리기 후 15분간 휴지합니다.",
						"반죽을 밀대로 밀어 직사각형을 만들고 적당한 크기로 분할하여 팬닝 후 180도 오븐에 15분간 구워줍니다."
					]
				}
			}
		]
	}, {
		"mode": "11. 파스타 도우",
		"breads": [
			{
				"title": "파스타 도우",
				"recipe": {
					"밀가루": { "max": 500, "unit": "g" },
					"계란": { "max": 2, "unit": "개" },
					"올리브유": { "max": 1, "unit": "큰술" }
				}
			}
		]
	}, {
		"mode": "12.피자 도우",
		"breads": [
			{
				"title": "피자 도우 기능으로 피자 만들기 - 4개 분량",
				"by": "일홍",
				"recipe": {
					"물": { "max": 320, "unit": "ml" },
					"소금": { "max": 7, "unit": "g" },
					"강력분": { "max": 500, "unit": "g" },
					"이스트": { "max": 10, "unit": "g" },
					"옥수수분말 약간": {}
				},
				"recipeComment": [
					"*피자 토핑 재료: 토마토 피자소스, 피망, 파프리카, 베이컨, 양파, 블랙 올리브, 브로콜리, 캔 옥수수, 모차렐라 치즈 등"
				],
				"step": {
					"seq": [
						"물과 소금 강력분 이스트를 넣고 12번 피자 도우를 작동시켜줍니다.",
						"반죽 기능과 발효 기능이 끝나면 반죽을 꺼내 4등분 후 중간 휴지를 20~30분 진행해 줍니다. (가볍게 둥글리기 후 마르지 않게 비닐로 덮어주세요.)",
						"반죽을 동그란 피자 모양으로 밀어줍니다. (옥수수분말을 덧가루로 사용)",
						"토마토소스를 바른 뒤 야채와 캔 옥수수를 약간 올린 뒤 모차렐라 치즈를 올리고 나머지 야채와 올리브로 장식해 줍니다.",
						"200도로 예열된 오븐에 12~15분 구워줍니다."
					]
				}
			}
		]
	}, {
		"mode": "13. 요거트",
		"breads": [
			{
				"title": "요거트",
				"recipe": {
					"실온의 우유": { "max": 900, "unit": "ml" },
					"플레인 요구르트": { "max": 100, "unit": "ml" }
				}
			}
		]
	}, {
		"mode": "14. 잼",
		"breads": [
			{
				"title": "딸기잼",
				"recipe": {
					"딸기": { "max": 500, "unit": "g" },
					"설탕": { "max": 250, "unit": "g" },
					"물엿이나 꿀": { "max": 40, "unit": "g" },
					" └ 또는 펙틴": { "max": 4, "unit": "g" },
					" └ 또는 설탕": { "max": 25, "unit": "g" },
					"레몬즙": { "max": 10, "unit": "g" }
				}
			}, {
				"title": "트리플 베리잼",
				"recipe": {
					"트리플 믹스베리(냉동 블루베리, 라즈베리, 블랙베리)": { "max": 1500, "unit": "g" },
					"유기농 황설탕": { "max": 1000, "unit": "g" },
					"레몬즙": { "max": 50, "unit": "g" }
				},
				"step": {
					"seq": [
						"트리플 베리를 믹서에 너무 곱지 않게 갈아줍니다. (너무 고우면 물 같아져 적합하지 않습니다.)",
						"제빵기 틀 안에 믹서에 간 믹스베리, 레몬즙, 설탕 순으로 넣어줍니다.",
					],
					"tip": [
						"<b>Tip</b>",
						"제빵기로 만든 잼은 농도가 묽을 수 있습니다.",
						"이는 제품 고장이 아니면 농도가 맞지 않은 경우 한 번 더 작동 바랍니다.",
						"농도를 높이고 싶은 경우 식용 펙틴을 조금 넣어 주셔도 됩니다.",
					]
				}
			}
		]
	}, {
		"mode": "15. 굽기",
		"breads": [
			{
				"recipeComment": [
					"타 기능과 함께 추가 굽기를 원하는 경우 간편하게 사용 가능합니다."
				]
			}
		]
		//"comment": "타 기능과 함께 추가 굽기를 원하는 경우 간편하게 사용 가능합니다."
	}, {
		"mode": "16. 홈메이드",
		"breads": [
			{
				"title": "생크림 말차 식빵",
				"by": "일홍",
				"recipe": {
					"생크림": { "max": 150, "unit": "g" },
					"우유": { "max": 300, "unit": "ml" },
					"설탕": { "max": 50, "unit": "g" },
					"소금": { "max": 7, "unit": "g" },
					"박력분": { "max": 70, "unit": "g" },
					"강력분": { "max": 430, "unit": "g" },
					"말차 가루": { "max": 10, "unit": "g" },
					"이스트": { "max": 8, "unit": "g" }
				},
				"step": {
					"txt": [
						"<b>",
						"홈메이드 세팅",
						"예열 0 / 반죽1-15분 / 발효1-20분 / 반죽2-20분 / 발효2-35분 / 발효3-40분 / 굽기-60분",
						"</b>"
					],
					"seq": [
						"생크림과 우유를 넣어줍니다.",
						"가루류를 넣어줍니다.",
						"16 홈메이드 설정을 위 홈메이드 세팅으로 설정 후 작동시켜줍니다.",
						"발효2 알람음이 울리고 RMV가 되면 반죽 날을 제거 후 반죽을 꺼내 매끈하게 모양을 만들어줍니다.",
						"발효3과 굽기를 진행해 줍니다."
					]
				}
			}, {
				"title": "어니언 먹물 치즈 식빵",
				"by": "일홍",
				"recipe": {
					"물": { "max": 300, "unit": "ml" },
					"먹물": { "max": 7, "unit": "g" },
					"설탕": { "max": 15, "unit": "g" },
					"소금": { "max": 7, "unit": "g" },
					"강력분": { "max": 500, "unit": "g" },
					"이스트": { "max": 7, "unit": "g" },
					"버터": { "max": 35, "unit": "g" },
					"양파 반 개 슬라이스로 준비": {},
					"체다치즈": { "min": 3, "max": 4, "unit": "장" },
					"모차렐라 치즈 적당량": {}
				},
				"step": {
					"txt": [
						"<b>",
						"홈메이드 세팅",
						"예열 0 / 반죽1-10분 / 발효1-10분 / 반죽2-20분 / 발효2-40분 / 발효3-20분 / 굽기-60분",
						"</b>"
					],
					"seq": [
						"물과 먹물을 먼저 넣어준 뒤 설탕, 소금 강력분, 이스트와 버터를 넣습니다.",
						"발효 2까지 진행되면 반죽을 꺼내 둥글리기 해준 뒤 20분간 휴지시킵니다.",
						"넓게 편 반죽에 슬라이스 치즈, 양파, 모차렐라치즈, 양파 약간 순으로 올려서 말아준 뒤 반죽 날 제거 후 반죽기 통 안에 넣어줍니다.",
						"반죽기의 3분의 2까지 발효 시켜줍니다.",
						"가운데 깊게 칼집을 내준 뒤 슬라이스 한 양파와 모차렐라 치즈를 덮어줍니다.",
						"굽기로 마무리한 뒤 한 김 식힌 후 분리해 줍니다."
					]
				}
			}, {
				"title": "호텔 식빵",
				"by": "일홍",
				"recipe": {
					"물": { "max": 250, "unit": "ml" },
					"달걀": { "max": 50, "unit": "g" },
					"설탕": { "max": 60, "unit": "g" },
					"소금": { "max": 8, "unit": "g" },
					"강력분": { "max": 500, "unit": "g" },
					"이스트": { "max": 7, "unit": "g" },
					"버터": { "max": 65, "unit": "g" }
				},
				"step": {
					"txt": [
						"<b>",
						"홈메이드 세팅",
						"예열 0 / 반죽1-15분 / 발효1-20분 / 반죽2-20분 / 발효2-40분 / 발효3-35분 / 굽기-60분",
						"</b>"
					],
					"seq": [
						"물과 달걀을 잘 섞어 준 뒤 제빵기 틀에 부어줍니다.",
						"가루류를 넣고 제빵기 안에 장착시켜줍니다.",
						"기능 15번으로 위 홈메이드 세팅으로 설정 후 작동시켜줍니다.",
						"반죽2 RMV가 되면 반죽을 8개로 분할 후 둥글리기 해서 제빵기에 넣고 발효3을 마칩니다.",
						"적당량의 버터를 가운데 넣고 설탕을 충분히 뿌려줍니다.",
						"굽기를 완성합니다.",
						"온기가 빠지면 팬에서 분리합니다."
					]
				}
			}, {
				"title": "마카룬 식빵",
				"by": "일홍",
				"recipe": {
					"우유": { "max": 300, "unit": "ml" },
					"달걀": { "max": 50, "unit": "g" },
					"이스트": { "max": 6, "unit": "g" },
					"강력분": { "max": 450, "unit": "g" },
					"설탕": { "max": 50, "unit": "g" },
					"소금": { "max": 6, "unit": "g" },
					"버터": { "max": 50, "unit": "g" }
					/*
					,
					"[토핑재료] 흰자": { "max": 30, "unit": "g" },
					"[토핑재료] 슈거파우더": { "max": 30, "unit": "g" },
					"[토핑재료] 아몬드파우더": { "max": 30, "unit": "g" },
					"[토핑재료] 토핑 할 슈거파우더 약간": {  }
					*/
				},
				"recipeComment": [
					"[토핑 재료] 흰자 30g 슈거파우더 30g, 아몬드파우더 30g, 토핑 할 슈거파우더 약간"
				],
				"step": {
					"txt": [
						"<b>",
						"홈메이드 세팅",
						"예열 0 / 반죽1-20분 / 발효1-20분 / 반죽2-20분 / 발효2-40분 / 발효3-40분 / 굽기-65분",
						"</b>"
					],
					"seq": [
						"수분 재료를 넣은 후 이스트를 넣고 잘 저어줍니다.",
						"버터를 제외한 가루류를 넣어줍니다.",
						"1차 반죽이 끝나고 1창 발효 시 버터를 넣어줍니다.",
						"반죽2가 끝나면 잠시 멈춤 한 뒤 매끈하게 둥글게 만든 뒤 다시 반죽기 안에 넣고 작동을 시킵니다.",
						"발효2가 RMV가 뜨면 잠시 멈춘 뒤 한 번의 기공을 정리해 주고 원하는 모양으로 성형을 해줍니다.",
						"반죽 날을 제고 후 발효3을 다시 작동시킵니다.",
						"발효가 끝나면 토핑을 위에 바르고 슈거파우더를 뿌리 후 굽기를 기다려줍니다."
					]
				}
			}
		]
	}
];
