extends CanvasLayer

@onready var players = get_parent().get_node("Players")
@onready var main = get_parent()
@onready var enemies = get_parent().get_node("Enemies")

var actual_action = 0

var turn = []
var actual_turn = 0

func _ready(): #
	for player in players.get_child_count():
		turn.push_back(players.get_child(player))
	for enemy in enemies.get_child_count():
		turn.push_back(enemies.get_child(enemy))

func pass_turn():
	actual_turn += 1
	if actual_turn >= turn.size():
		actual_turn = 0
	if turn[actual_turn].is_in_group("Player"):
		$Control.show()
		if (actual_action == 0):
			alternate_enemy()
		else:
			alternate_player()
	else:
		turn[actual_turn].use_action()

func _on_button_pressed(action):
	target_entity(action)
	$Control.hide()

func target_entity(action:String):
	if action == 'Attack':
		alternate_enemy()
		actual_action = 0;
	else:
		alternate_player()
		match action:
			'Heal':
				actual_action = 1
			'Defense':
				actual_action = 2
			'Reload':
				actual_action = 3

func alternate_player():
	for player in players.get_child_count():
		main.get_node("Players").get_child(player).get_node("Button").visible = !main.get_node("Players").get_child(player).get_node("Button").visible

func alternate_enemy():
	for enemy in main.get_node("Enemies").get_child_count():
		main.get_node("Enemies").get_child(enemy).get_node("Button").visible = !main.get_node("Enemies").get_child(enemy).get_node("Button").visible

func use_action(target:Object):
	turn[actual_turn].action(target,actual_action)

@onready var goverflag = 0

func gameover():
	print("gameover!")
	
func _process(delta):
		
	if get_parent().get_node("Players").get_child_count() == 0 and goverflag == 0:
		gameover()
		goverflag = 1
