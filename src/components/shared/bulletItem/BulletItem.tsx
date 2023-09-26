import icono_bullet from '../../../assets/images/icono_bullet.png';

function BulletItem(props: any) {
	return (
		<>
			<div
				style={{
					display: 'flex',
					justifyContent: 'left',
					alignItems: 'center',
					width: '60%',
				}}>
				<img src={icono_bullet} />
				<p
					style={{
						marginLeft: '5%',
						color: '#32677F',
						fontFamily: 'D-DIN',
					}}>
					{props.text}
				</p>
			</div>
		</>
	);
}
export default BulletItem;
