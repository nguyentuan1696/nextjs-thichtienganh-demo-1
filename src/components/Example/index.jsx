import clsx from 'clsx'
import styles from './styles.module.css'


const IconExample = () =>
{
	return (
		<svg viewBox="0 0 20 20" fill="currentColor" height="20" width="20">
			<path d="M18.303,4.742l-1.454-1.455c-0.171-0.171-0.475-0.171-0.646,0l-3.061,3.064H2.019c-0.251,0-0.457,0.205-0.457,0.456v9.578c0,0.251,0.206,0.456,0.457,0.456h13.683c0.252,0,0.457-0.205,0.457-0.456V7.533l2.144-2.146C18.481,5.208,18.483,4.917,18.303,4.742 M15.258,15.929H2.476V7.263h9.754L9.695,9.792c-0.057,0.057-0.101,0.13-0.119,0.212L9.18,11.36h-3.98c-0.251,0-0.457,0.205-0.457,0.456c0,0.253,0.205,0.456,0.457,0.456h4.336c0.023,0,0.899,0.02,1.498-0.127c0.312-0.077,0.55-0.137,0.55-0.137c0.08-0.018,0.155-0.059,0.212-0.118l3.463-3.443V15.929z M11.241,11.156l-1.078,0.267l0.267-1.076l6.097-6.091l0.808,0.808L11.241,11.156z"></path>
		</svg>
	)
}

const Example = ({ exams }) =>
{
	return (
		<div className={clsx(styles.example)}>
			<h5 className={clsx(styles.example__title)}>
				<IconExample />
				Ví dụ
			</h5>
			<ul> 
				{exams.map((exam, key) => (
					<li key={key}>{exam}</li>
				))}
			</ul>
		</div>
	)
}

export default Example
