extends Node2D

var areas = []
var shape_index

func _ready():
	for area in $Area2D.get_child_count():
		areas.push_back($Area2D.get_child(area))

func _on_input_event(_viewport, event, shape_idx):
	if Input.is_action_just_pressed('LMB'):
		print(shape_idx)
		get_parent().area_index = shape_idx
