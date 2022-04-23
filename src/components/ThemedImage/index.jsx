import Image from 'next/image'

const ThemedImage = (props) =>
{
	return <Image src={props.source} alt={props.alt} height={props.height} width={props.width} {...props} />
}

export default ThemedImage
