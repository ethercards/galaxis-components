import { useEffect, useState } from "react";
import { GalaxisCard } from 'galaxis-components';
import { getFilteredCards } from "../../ApiTester";
import video from './150anim.mp4';
import image from './03.png'

const CardTest = ()=>{
	const traitTypes = [{"id":1,"name":"Physical Redeemables","icon_white":"\/storage\/app\/uploads\/public\/trait_type_icons\/physical-white.svg","icon_orange":"\/storage\/app\/uploads\/public\/trait_type_icons\/physical-orange.svg","icon_black":"\/storage\/app\/uploads\/public\/trait_type_icons\/physical-black.svg"},{"id":2,"name":"Digital Redeemables","icon_white":"\/storage\/app\/uploads\/public\/trait_type_icons\/digital-white.svg","icon_orange":"\/storage\/app\/uploads\/public\/trait_type_icons\/digital-orange.svg","icon_black":"\/storage\/app\/uploads\/public\/trait_type_icons\/digital-black.svg"},{"id":3,"name":"Discount Traits","icon_white":"\/storage\/app\/uploads\/public\/trait_type_icons\/discount-white.svg","icon_orange":"\/storage\/app\/uploads\/public\/trait_type_icons\/discount-orange.svg","icon_black":"\/storage\/app\/uploads\/public\/trait_type_icons\/discount-black.svg"},{"id":4,"name":"Access Traits","icon_white":"\/storage\/app\/uploads\/public\/trait_type_icons\/access-white.svg","icon_orange":"\/storage\/app\/uploads\/public\/trait_type_icons\/access-orange.svg","icon_black":"\/storage\/app\/uploads\/public\/trait_type_icons\/access-black.svg"},{"id":5,"name":"Modifiers","icon_white":"\/storage\/app\/uploads\/public\/trait_type_icons\/modifier-white.svg","icon_orange":"\/storage\/app\/uploads\/public\/trait_type_icons\/modifier-orange.svg","icon_black":"\/storage\/app\/uploads\/public\/trait_type_icons\/modifier-black.svg"},{"id":6,"name":"Meeting","icon_white":"\/storage\/app\/uploads\/public\/trait_type_icons\/meeting-white.svg","icon_orange":"\/storage\/app\/uploads\/public\/trait_type_icons\/meeting-orange.svg","icon_black":"\/storage\/app\/uploads\/public\/trait_type_icons\/meeting-black.svg"},{"id":7,"name":"Badges","icon_white":"\/storage\/app\/uploads\/public\/trait_type_icons\/badge-white.svg","icon_orange":"\/storage\/app\/uploads\/public\/trait_type_icons\/badge-orange.svg","icon_black":"\/storage\/app\/uploads\/public\/trait_type_icons\/badge-black.svg"},{"id":8,"name":"Signature","icon_white":"\/storage\/app\/uploads\/public\/trait_type_icons\/access-white.svg","icon_orange":"\/storage\/app\/uploads\/public\/trait_type_icons\/autograph-orange.svg","icon_black":"\/storage\/app\/uploads\/public\/trait_type_icons\/autograph-black.svg"}]


	const [metadata, setMetadata] = useState();
  	const [loaded, setLoaded] = useState(false);

	  const metadataArray = [{
		"image": image,
		"attributes": [
			{
				"value": "Lava Pink",
				"trait_type": "Background"
			},
			{
				"value": "Shiny Fraktal Red",
				"trait_type": "Aura"
			},
			{
				"value": "Ror’Khan",
				"trait_type": "Character"
			},
			{
				"value": "Common",
				"trait_type": "Character Type"
			},
			{
				"value": "Moonglow",
				"trait_type": "Bonus Art"
			},
			{
				"value": "Zoltan Boros",
				"trait_type": "Artist"
			},
			{
				"value": "Gabor Szikszai",
				"trait_type": "Artist"
			}
		],
		"collection_name": "Girls, Robots, Dragons",
		"name": "Girls, Robots, Dragons #1038",
		"perfect": false,
		"collection_type": "galaxis",
		"tokenId": 1038,
		"description": "Prefers the glint of emeralds, rubies and sapphires. He accepts and fuses only the finest quality gems into his battle scars.",
		"sides": [
			{
				"id": 1,
				"dna": "589002",
				"image": `${image}`
			},
			{
				"id": 2,
				"dna": "50",
				"image": `${video}`
			}
		],
		"rare": false,
		"animation_url": "https://grd.fan/#/render?metadata.grd.fan/api/metadata/88/1088",
		"about": "It’s five thousand years into the future and the world has changed. The Girls, the Robots and the Dragons are the last three tribes of sentient beings in existence. Each tribe is served by a council of their five greatest champions. The legends of Flesh, Steel and Scale remain locked in conflict - with nature, each other and their inner selves. Who shall prevail?",
		"traits":[
			{
			   "name":"Game access",
			   "type":7,
			   "description":"You can use this NFT to access the Betwixt game. To access the game go to nft.betwixt.life"
			},
			{
			   "name":"this is a box",
			   "type":1,
			   "description":"Claim your free and unique painting on canvas created by legendary Boros-Szikszai artist duo."
			}
		 ]
	}]
	useEffect(() => {
	  if(!loaded){
		setMetadata(metadataArray[0])
		setLoaded(true)
	  }
	}, [loaded])
	
	return (
		<>
		<div style={{width:"100%", height:"100%", overflow:"hidden"}}>
		{loaded && (
			
			<GalaxisCard
				name="Teszt"
				metadata={metadata}
				traitTypes={traitTypes}
				horizontalPadding={20}
				imageContainerWidth={400}
			/>
			
			)
		}
		</div>
		</>
	);
}

export default CardTest;