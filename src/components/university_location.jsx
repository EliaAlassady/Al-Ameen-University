export default function UniversityLocation() {
    return (
        <div className="w-full px-4 sm:px-8 md:px-16 lg:px-32 py-8">
            <div className="mt-8 rounded-lg overflow-hidden shadow-lg">
                <div className="w-full h-96">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3349.999999999999!2d44.385927143136556!3d33.35915033213905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDIxJzMyLjkiTiA0NMKwMjMnMDkuMyJF!5e0!3m2!1sen!2siq!4v1620000000000!5m2!1sen!2siq"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        title="Al-Ameen University"
                        className="rounded-lg"
                    ></iframe>
                </div>
            </div>
        </div>
    )
}