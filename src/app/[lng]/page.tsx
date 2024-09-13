import { useTranslation } from '@/app/i18n';

export default async function Home({ params: { lng } }) {
    const { t } = await useTranslation(lng);
    return (
        <div className={'flex h-full items-center justify-center'}>
            <h1 className={'text-4xl'}> {t('initText' as any)}</h1>
        </div>
    );
}
