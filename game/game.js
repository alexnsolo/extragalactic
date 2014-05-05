exports.main = {
	player: {
		ship: {
			name: 'Kestrel',
			description: 'A small transport vessel from the age of The Fourth Insurrection. Boasts a spacious cargo hold and light armor.',
			health: 1450,
			maxHealth: 1450,
			subsystems: [
				{
					type: 'mining laser',
					description: 'Dalton ML-1300',
					health: 100,
					maxHealth: 100,
					properties: [{miningPower: 12}]	
				},
				{
					type: 'sublight engine',
					description: 'Quicksilver Dasher',
					health: 250,
					maxHealth: 250,	
					properties: [{thrustPower: 45}]	
				},
				{
					type: 'cargohold',
					description: 'Standard Cargo',
					health: 500,
					maxHealth: 500,
					properties: [{cargoCapacity: 300}]	
				},
			]
		}
	}
};